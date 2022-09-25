"use strict";

const fs = require("fs");
const BOJkey = 1;
const input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

for (let i = 0; i < 3; i++) {
  console.log(input[0]);
}
