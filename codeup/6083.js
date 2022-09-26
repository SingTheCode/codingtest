"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = input[0].split(" ").map(Number);
let cnt = 0;

for (let i = 0; i < input[0]; i++) {
  for (let j = 0; j < input[1]; j++) {
    for (let k = 0; k < input[2]; k++) {
      console.log(i, j, k);
      cnt++;
    }
  }
}
console.log(cnt);
