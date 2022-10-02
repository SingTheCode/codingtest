"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number);
input = input.slice(1).map((el) => el.split(" ").map(Number));

function solution(N, M, K, X, input) {
  const result = [];
  const visited = Array(N + 1).fill(0);
  const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  const queue = [];

  // graph에 간선 입력
  input.forEach((el) => {
    const [start, end] = el;

    graph[start][end] = 1;
  });

  function bfs() {
    queue.push(X);

    while (queue.length) {
      const v = queue.shift();

      if (visited[v] === K) {
        result.push(v);
        continue;
      }
      for (let i = 0; i < N + 1; i++) {
        if (graph[v][i] === 1) {
          if (visited[i] === 0) {
            queue.push(i);
            visited[i] = visited[v] + 1;
          }
        }
      }
    }
  }
  bfs();

  // result 출력
  result.sort((a, b) => a - b);

  if (result.length === 0) {
    console.log(-1);
    return;
  }
  result.forEach((el) => console.log(el));
  return;
}

solution(N, M, K, X, input);
