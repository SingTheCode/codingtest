"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

switch (input[0]) {
  case "A":
    console.log("best!!!");
    break;
  case "B":
    console.log("good!!");
    break;
  case "C":
    console.log("run!");
    break;
  case "D":
    console.log("slowly~");
    break;
  default:
    console.log("what?");
}
