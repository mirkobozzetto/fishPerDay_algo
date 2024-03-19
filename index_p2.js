import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const result = data.trim().split(",").map(Number);
  return result;
};

const lines = (fish, days) => {
  let fishCounts = new Array(9).fill(0);
  fish.forEach((f) => fishCounts[f]++);
  for (let i = 0; i < days - 1; i++) {
    let newFishCounts = new Array(9).fill(0);
    newFishCounts[6] = fishCounts[0];
    for (let j = 1; j < 9; j++) {
      newFishCounts[j - 1] += fishCounts[j];
    }
    newFishCounts[8] += fishCounts[0];
    fishCounts = newFishCounts;
  }
  return fishCounts.reduce((a, b) => a + b, 0);
};

const fish = part1(final);
const lastLine = lines(fish, 257);
console.log(lastLine);
