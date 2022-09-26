"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = input[0].split(" ").map(Number);
for (let i = 0; i < input[0]; i++) {
  for (let j = 0; j < input[1]; j++) {
    console.log(i + 1, j + 1);
  }
}
