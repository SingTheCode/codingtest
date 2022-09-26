"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const start = "a".charCodeAt(0);
const end = input[0].charCodeAt(0);
for (let i = start; i < end + 1; i++) {
  console.log(String.fromCharCode(i));
}
