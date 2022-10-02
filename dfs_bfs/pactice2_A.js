"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const tmpArr = Array.from(Array(N), () => Array(M).fill(0));

function solution(N, M, arr) {
  const di = [-1, 0, 1, 0];
  const dj = [0, 1, 0, -1];
  let cnt = 0; // 벽 개수
  let tmpCnt = 0; // 안전지대 개수
  let result = 0;

  // 바이러스 퍼진 결과 표시
  function virus(ci, cj) {
    for (let k = 0; k < 4; k++) {
      const ni = ci + di[k];
      const nj = cj + dj[k];

      if (ni >= 0 && ni < N && nj >= 0 && nj < M && tmpArr[ni][nj] === 0) {
        tmpArr[ni][nj] = 2;
        virus(ni, nj);
      }
    }
  }

  // 벽 3개 쌓은 후 0 개수 탐색 (벽 개수, 벽 쌓아진 arr 복사본)
  function dfs(count) {
    if (count === 3) {
      // tmpArr에 복사
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          tmpArr[i][j] = arr[i][j];
        }
      }

      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (tmpArr[i][j] === 2) virus(i, j);
        }
      }

      // 0 개수 가장 큰 값으로 최신화
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (tmpArr[i][j] === 0) tmpCnt++;
        }
      }
      result = Math.max(result, tmpCnt);
      tmpCnt = 0;
      return;
    }

    // 벽 3개 쌓기
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] === 0) {
          arr[i][j] = 1;
          cnt++;
          dfs(cnt);
          arr[i][j] = 0;
          cnt--;
        }
      }
    }
  }
  dfs(0);

  return result;
}

console.log(solution(N, M, arr));
