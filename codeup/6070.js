"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

switch (Number(input[0])) {
  case 12 || 1 || 2:
    console.log("winter");
    break;
  case 3 || 4 || 5:
    console.log("spring");
    break;
  case 6 || 7 || 8:
    console.log("summer");
    break;
  case 9 || 10 || 11:
    console.log("fall");
    break;

  default:
    console.log("hello?");
}
