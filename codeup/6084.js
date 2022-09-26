"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = input[0].split(" ").map(Number);

const result = (input[0] * input[1] * input[2] * input[3]) / 8 / 1024 / 1000;
console.log(Math.round(result * 10) / 10, "MB");
