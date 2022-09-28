"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const N = Number(input[0]);
const schedule = input[1].split(" ");

function solution(N, schedule) {
  let i = 1;
  let j = 1;

  schedule.forEach((arrow) => {
    switch (arrow) {
      case "L":
        if (j - 1 > 0) {
          j--;
        }
        break;
      case "R":
        if (j + 1 < N + 1) {
          j++;
        }
        break;
      case "U":
        if (i - 1 > 0) {
          i--;
        }
        break;
      case "D":
        if (i - 1 < N + 1) {
          i++;
        }
        break;
      default:
    }
  });

  return `${i} ${j}`;
}

console.log(solution(N, schedule));
