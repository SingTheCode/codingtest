"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

let i = 0;
let sum = 0;
while (true) {
  sum += i;
  if (sum === Number(input[0])) {
    console.log(i);
    return;
  }
  i++;
}
