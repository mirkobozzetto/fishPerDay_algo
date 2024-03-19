import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const result = data.trim().split(",");
  return result;
};

const lines = (fish, days) => {
  console.log(fish.join(","));
  let fishPerDay = fish;
  for (let i = 0; i < days - 1; i++) {
    let addEight = 0;
    fishPerDay = fishPerDay.map((n) => {
      let num = parseInt(n) - 1;
      if (num < 0) {
        addEight++;
        return 6;
      }
      return num;
    });
    for (let j = 0; j < addEight; j++) {
      fishPerDay.push(8);
    }
    console.log(fishPerDay.join(","));
  }
  return fishPerDay;
};

const countFish = (fish) => {
  return fish.length;
};

const fish = part1(final);
const lastLine = lines(fish, 81);
console.log(countFish(lastLine));

// console.log({ part1: part1(test) });
// lines(part1(test), 19);
