"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = input[0].split(" ").map(Number);
let result = "";
const sum = input.reduce((prev, cur) => prev + cur, 0);
const average = Math.round((sum / input.length) * 100) / 100;
result += sum + " " + average;
console.log(result);
