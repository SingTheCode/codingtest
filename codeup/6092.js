"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const call = Array(23).fill(0);

for (let i = 0; i < n; i++) {
  call[arr[i] - 1]++;
}

const result = call.reduce((prev, cur) => prev + cur + " ", "");
console.log(result);
