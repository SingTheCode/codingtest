"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

function solution(currentPosition) {
  let cnt = 0;
  const di = [-2, -2, -1, 1, 2, 2, 1, -1];
  const dj = [-1, 1, 2, 2, -1, 1, -2, -2];

  let [j, i] = currentPosition.split("");
  const start = "a".charCodeAt(0);
  j = j.charCodeAt(0) - start;
  i = Number(i) - 1;

  for (let k = 0; k < 8; k++) {
    const ni = i + di[k];
    const nj = j + dj[k];

    if (ni >= 0 && ni < 8 && nj >= 0 && nj < 8) cnt++;
  }
  return cnt;
}

console.log(solution(input[0]));
