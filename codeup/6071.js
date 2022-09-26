"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") return;
  console.log(input[i]);
}
