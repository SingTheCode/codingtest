"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = input.map(Number);
let result = input.reduce((prev, cur) => prev + cur, 0);
if (parseInt(result) === result) {
  console.log(Number(result) + ".0");
  return;
}
console.log(result);
