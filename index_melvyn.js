import { readFileSync } from "fs";

// const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const DAYS = 80;
// const fishs = test.split(",").map(Number);
const fishs = final.split(",").map(Number);

for (let day = 0; day < DAYS; day++) {
  const saveLength = fishs.length;
  for (let i = 0; i < saveLength; i++) {
    if (fishs[i] === 0) {
      fishs[i] = 6;
      fishs.push(8);
    } else {
      fishs[i]--;
    }
  }
}

console.log({
  fishs,
  length: fishs.length,
});
