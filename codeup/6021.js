"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

  input = input[0].split("");
  input.forEach((el) => {
    console.log(el);
  });
  