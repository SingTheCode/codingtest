"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [str, n] = input[0].split(" ").map((el) => (isNaN ? el : Number(el)));
let result = "";
for (let i = 0; i < n; i++) {
  result += str;
}
console.log(result);
