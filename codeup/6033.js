"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const uni = input[0].charCodeAt(0);
console.log(String.fromCharCode(uni + 1));
