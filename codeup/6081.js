"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const ten = parseInt(input[0], 16);
for (let i = 1; i < 16; i++) {
  const result = (ten * i).toString(16);
  console.log(
    `${input[0]}*${i.toString(16).toUpperCase()}=${result.toUpperCase()}`
  );
}
