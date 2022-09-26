"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const n = Number(input[0]);
const arr = Array.from(input.slice(1), (value) => value.split(" ").map(Number));

const checkerboard = Array.from(Array(19), () => Array(19).fill(0));
arr.forEach((el) => {
  const [r, c] = el;
  checkerboard[r - 1][c - 1] = 1;
});

const checkerboardStr = checkerboard
  .map((el) => el.join(" "))
  .reduce((prev, cur) => prev + cur + "\n", "");

console.log(checkerboardStr);
