import { readFileSync } from "fs";

// const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part2 = (inputData) => inputData.trim().split(",").map(Number);

const calculateFishCounts = (initialFishCounts, numberOfDays) => {
  let currentFishCounts = Array(9).fill(0);
  initialFishCounts.forEach((fishType) => currentFishCounts[fishType]++);
  for (let day = 1; day < numberOfDays; day++) {
    const nextDayFishCounts = Array(9).fill(0);
    nextDayFishCounts[6] += currentFishCounts[0];
    nextDayFishCounts[8] += currentFishCounts[0];
    for (let state = 1; state < 9; state++) {
      nextDayFishCounts[state - 1] += currentFishCounts[state];
    }
    currentFishCounts = nextDayFishCounts;
  }
  return currentFishCounts.reduce((total, count) => total + count);
};

const initialFishCounts = part2(final);
const totalFishCountAfterDays = calculateFishCounts(initialFishCounts, 257);

console.log(totalFishCountAfterDays);
