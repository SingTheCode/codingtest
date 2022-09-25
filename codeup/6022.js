"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const result = [];
for (let i = 0; i < 6; i += 2) {
  const tmp = input[0].slice(i, i + 2);
  result.push(tmp);
}
console.log(result.join(" "));
