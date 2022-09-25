"use strict";

const fs = require("fs");
const BOJkey = 1;
const input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const tmp = input[0].split(" ").map((el) => +el);
console.log(tmp[0]);
console.log(tmp[1]);
