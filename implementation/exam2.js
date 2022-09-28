"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const N = Number(input[0]);

function solution(N) {
  let cnt = 0;

  for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        const result = `${i}${j}${k}`;
        if (
          result
            .split("")
            .map(Number)
            .find((el) => el === 3)
        )
          cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution(N));
