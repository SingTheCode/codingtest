"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

input = Number(input[0]);

if (input >= 90 && input <= 100) console.log("A");
else if (input < 90 && input >= 70) console.log("B");
else if (input < 70 && input >= 40) console.log("C");
else if (input < 40 && input >= 0) console.log("D");
