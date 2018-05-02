const fs = require('fs');

const doTest = require('./time-tester');

const FIRST_DAY = 1;
const LAST_DAY = 14;
let day, data, answerCount;

// The following is based over the convention that
// each day module import returns parts as objects named 'part1'
// and 'part2', respectively, and that each part contains
// at least one answer as member method named 'answer1'.
//
// Further answers are named 'answer2', 'answer3', etc.
//
// Other methods (helpers, etc.) must NOT contain the string 'answer'.

// iterate from day FIRST_DAY to day LAST_DAY
for (let d = FIRST_DAY; d <= LAST_DAY; d++) {
  day = require(`./day${d}/answers`);
  data = fs.readFileSync(`./day${d}/input.txt`);
  // iterate from part 1 to part 2
  for (let p = 1; p <= 2; p++) {
    if (day.hasOwnProperty(`part${p}`)) {
      // find the number of answers for the current part with a regex
      answerCount = Object.keys(day[`part${p}`]).filter(k => /^answer/.test(k))
        .length;
      // iterate from answer 1 to answer answerCount
      for (let a = 1; a <= answerCount; a++) {
        doTest(
          data, // data to run the test over
          day[`part${p}`][`answer${a}`], // answer function
          `Jaxxeh's day${d} part${p} answer${a}`, // name of the answer
          // If the part has a 'runs' property, execute that number of
          // runs, otherwise run once only
          day[`part${p}`].hasOwnProperty('runs') ? day[`part${p}`].runs : 1
        );
      }
    }
  }
}
