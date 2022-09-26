"use strict";

const fs = require("fs");
const BOJkey = 1;
let input = fs
  .readFileSync(BOJkey ? "./input.txt" : "/dev/stdin")
  .toString()
  .split("\n");

const [h, w] = input[0].split(" ").map(Number);
const n = Number(input[2]);
const arr = Array.from(Array(h), () => Array(w).fill(0));
const action = input.slice(2).map((el) => el.split(" ").map(Number));

function solve(l, d, x, y) {
  for (let i = 0; i < l; i++) {
    if (d === 1) {
      arr[x - 1 + i][y - 1] = 1;
    } else {
      arr[x - 1][y - 1 + i] = 1;
    }
  }
}

action.forEach((el, idx) => {
  const [l, d, x, y] = el;
  console.log(idx);
  solve(l, d, x, y);
});

const result = arr
  .map((el) => el.join(" "))
  .reduce((prev, cur) => prev + cur + "\n", "");

console.log(result);
