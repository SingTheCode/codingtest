const fs = require("fs");
const BOJkey = 1;
const input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

console.log(Number(input[0]));
