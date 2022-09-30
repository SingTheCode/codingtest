"use strict";

const fs = require("fs");
const BOJkey = 1;
const input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split("").map(Number));

function solution(N, M, arr) {
  const queue = [];
  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];
  let result = 0;

  function bfs() {
    queue.push([0, 0]);

    while (queue) {
      const [ci, cj] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const ni = ci + di[k];
        const nj = cj + dj[k];

        if (ni >= 0 && ni < N && nj >= 0 && nj < M && arr[ni][nj] !== 0) {
          arr[ni][nj] = arr[ci][cj] + 1;
          queue.push([ni, nj]);
          if (ni === N - 1 && nj === M - 1) {
            result = arr[ni][nj];
            return;
          }
        }
      }
    }
  }
  bfs();

  return result;
}

console.log(solution(N, M, arr));
