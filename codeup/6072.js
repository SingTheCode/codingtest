"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = Number(input[0]);
for (let i = input; i > 0; i--) {
  console.log(i);
}
