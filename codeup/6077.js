"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

let result = 0;
for (let i = 1; i < Number(input[0]) + 1; i++) {
  if (i % 2 === 0) result += i;
}
console.log(result);
