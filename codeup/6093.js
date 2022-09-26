"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const newArr = arr.reverse();

const result = newArr.reduce((prev, cur) => prev + " " + cur, "");
console.log(result);
