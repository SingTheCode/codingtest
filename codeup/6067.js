"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const tmp = Number(input[0]);

if (tmp < 0) {
  if (tmp % 2 === 0) {
    console.log("A");
  } else {
    console.log("B");
  }
} else {
  if (tmp % 2 === 0) {
    console.log("C");
  } else {
    console.log("D");
  }
}