"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = Number(input[0]);

while (true) {
  input--;
  if (input < 0) return;
  console.log(input);
}
