"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = input[0].split(" ").map(Number);

let result = input[0];
for (let i = 0; i < input[3] - 1; i++) {
  result *= input[1];
  result += input[2];
}
console.log(result);
