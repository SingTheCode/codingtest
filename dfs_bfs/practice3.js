"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1).map((el) => el.split(" ").map(Number));
const [S, X, Y] = input[N + 1].split(" ").map(Number);

function solution(N, K, S, X, Y, arr) {
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];

  function virus(ci, cj, num) {
    for (let k = 0; k < 4; k++) {
      const ni = ci + di[k];
      const nj = cj + dj[k];

      if (ni >= 0 && ni < N && nj >= 0 && nj < N && arr[ni][nj] === 0) {
        arr[ni][nj] = num;
      }
    }
  }

  // 전체 바이러스 전염 회차
  for (let s = 0; s < S; s++) {
    // 각 바이러스 번호
    let k = 1;
    while (k < K + 1) {
      outer: for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (arr[i][j] === k) {
            virus(i, j, k);
            k++;
            break outer;
          }
        }
      }
    }
  }

  return arr[X - 1][Y - 1];
}

console.log(solution(N, K, S, X, Y, arr));
