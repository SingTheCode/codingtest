"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const n = Number(input[0]);
const str = input[1];
let result = "";
for (let i = 0; i < n; i++) {
  result += str;
}
console.log(result);