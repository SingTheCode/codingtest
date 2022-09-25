"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input[0]
  .split(" ")
  .map(Number)
  .filter((el) => el % 2 === 0)
  .forEach((el) => console.log(el));
