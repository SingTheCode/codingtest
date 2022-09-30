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
  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) {
        dfs(i, j);
        cnt++;
      }
    }
  }

  function dfs(ci, cj) {
    arr[ci][cj] = 1;

    for (let k = 0; k < 4; k++) {
      const ni = ci + di[k];
      const nj = cj + dj[k];

      if (ni >= 0 && ni < N && nj >= 0 && nj < M && arr[ni][nj] === 0) {
        dfs(ni, nj);
      }
    }
  }

  return cnt;
}

console.log(solution(N, M, arr));
