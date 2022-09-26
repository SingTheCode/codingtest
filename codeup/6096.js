"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const arr = input.slice(0, 19).map((el) => el.split(" ").map(Number));
const n = Number(input[19]);
const action = input
  .slice(20, input.length)
  .map((el) => el.split(" ").map(Number));

action.forEach((el) => {
  const [r, c] = el;

  arr[r - 1] = arr[r - 1].map((el) => {
    if (el) return 0;
    return 1;
  });

  for (let i = 0; i < 19; i++) {
    if (arr[i][c - 1]) arr[i][c - 1] = 0;
    else arr[i][c - 1] = 1;
  }
});

const result = arr
  .map((el) => el.join(" "))
  .reduce((prev, cur) => prev + cur + "\n", "");
console.log(result);
