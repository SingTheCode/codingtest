"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [ci, cj, cd] = input[1].split(" ").map(Number);
const arr = input.slice(2).map((el) => el.split(" ").map(Number));

function solution(N, M, ci, cj, cd, arr) {
  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];
  let cnt = 1;
  arr[ci][cj] = -1;

  while (true) {
    for (let p = 0; p < 4; p++) {
      // ❗️ di, dj의 길이를 넘어가면 길이만큼 나눈 나머지로 대체한다.
      const ni = ci + di[(cd + p - 1) % 4];
      const nj = cj + dj[(cd + p - 1) % 4];

      if (ni >= 0 && ni < N && nj >= 0 && nj < M && arr[ni][nj] === 0) {
        arr[ni][nj] = -1;
        ci = ni;
        cj = nj;
        cd = cd + p - 1;
        cnt++;
        break;
      }

      if (p === 3) {
        if (arr[ni][nj] === 1) return cnt;
        else {
          ci = ni;
          cj = nj;
        }
      }
    }
  }
}

console.log(solution(N, M, ci, cj, cd, arr));
