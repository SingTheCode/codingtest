"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const arr = input.map((el) => el.split(" ").map(Number));
let i = 1;
let j = 1;

while (true) {
  if (arr[i][j] === 2) {
    arr[i][j] = 9;
    break;
  }

  if (arr[i][j] === 0) {
    arr[i][j] = 9;
  }

  if (arr[i][j + 1] === 0 || arr[i][j + 1] === 2) {
    j++;
    continue;
  }

  if (arr[i + 1][j] === 0 || arr[i + 1][j] === 2) {
    i++;
    continue;
  }
  break;
}

const result = arr
  .map((el) => el.join(" "))
  .reduce((prev, cur) => prev + cur + "\n", "");

console.log(result);
