const fs = require('fs');
const doTest = require('./time-tester');

const jaxxeh1 = require('./santa-part1');
const jaxxeh2 = require('./santa-part2');

const data = fs.readFileSync('./input.txt');

// advent 2015 day 1 part 1
doTest(data, jaxxeh1.santa1, "Jaxxeh's santa1", 1000);
doTest(data, jaxxeh1.santa2, "Jaxxeh's santa2", 1000);
doTest(data, jaxxeh1.santa3, "Jaxxeh's santa3", 1000);
doTest(data, jaxxeh1.santa4, "Jaxxeh's santa4", 1000);

// advent 2015 day 1 part 2
doTest(data, jaxxeh2.santa21, "Jaxxeh's santa21", 1000);
doTest(data, jaxxeh2.santa22, "Jaxxeh's santa22", 1000);
