"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [one, two, three] = input[0].split(" ").map(Number);

let day = 1;
while (day % one !== 0 || day % two !== 0 || day % three !== 0) {
  day++;
}
console.log(day);
