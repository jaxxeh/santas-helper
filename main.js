const fs = require('fs');
const crypto = require('crypto');

const doTest = require('./time-tester');

const d1p1 = require('./day1/part1');
const d1p2 = require('./day1/part2');

const d2p1 = require('./day2/part1');
const d2p2 = require('./day2/part2');

const d3p1 = require('./day3/part1');
const d3p2 = require('./day3/part2');

const d4p1 = require('./day4/part1');
const d4p2 = require('./day4/part2');

const d5p1 = require('./day5/part1');
const d5p2 = require('./day5/part2');

const d6p1 = require('./day6/part1');
const d6p2 = require('./day6/part2');

const d7p1 = require('./day7/part1');
const d7p2 = require('./day7/part2');

const d8p1 = require('./day8/part1');
const d8p2 = require('./day8/part2');

const d9p1 = require('./day9/part1');
const d9p2 = require('./day9/part2');

const d10p1 = require('./day10/part1');
const d10p2 = require('./day10/part2');

const d11p1 = require('./day11/part1');
const d11p2 = require('./day11/part2');

const d12p1 = require('./day12/part1');
const d12p2 = require('./day12/part2');

const d13p1 = require('./day13/part1');
const d13p2 = require('./day13/part2');

const d14p1 = require('./day14/part1');
const d14p2 = require('./day14/part2');

let data;

// advent 2015 day 1 data
data = fs.readFileSync('./day1/input.txt');

// advent 2015 day 1 part 1
doTest(data, d1p1.answer1, "Jaxxeh's day1 part1 answer1", 1000);
doTest(data, d1p1.answer2, "Jaxxeh's day1 part1 answer2", 1000);
doTest(data, d1p1.answer3, "Jaxxeh's day1 part1 answer3", 1000);
doTest(data, d1p1.answer4, "Jaxxeh's day1 part1 answer4", 1000);

// advent 2015 day 1 part 2
doTest(data, d1p2.answer1, "Jaxxeh's day1 part2 answer1", 1000);
doTest(data, d1p2.answer2, "Jaxxeh's day1 part2 answer2", 1000);

// advent 2015 day 2 data
data = fs.readFileSync('./day2/input.txt');

// advent 2015 day 2 part 1
doTest(data, d2p1.answer1, "Jaxxeh's day2 part1 answer1", 1000);

// advent 2015 day 2 part 2
doTest(data, d2p2.answer1, "Jaxxeh's day2 part2 answer1", 1000);

// advent 2015 day 3 data
data = fs.readFileSync('./day3/input.txt');

// advent 2015 day 3 part 1
doTest(data, d3p1.answer1, "Jaxxeh's day3 part1 answer1", 10);

// advent 2015 day 3 part 2
doTest(data, d3p2.answer1, "Jaxxeh's day3 part2 answer1", 10);

// advent 2015 day 4 data
data = 'yzbqklnj';

// advent 2015 day 4 part 1
doTest(data, d4p1.answer1, "Jaxxeh's day4 part1 answer1", 1);

// advent 2015 day 4 part 2
doTest(data, d4p2.answer1, "Jaxxeh's day4 part2 answer1", 1);

// advent 2015 day 5 data
data = fs.readFileSync('./day5/input.txt');

// advent 2015 day 5 part 1
doTest(data, d5p1.answer1, "Jaxxeh's day5 part1 answer1", 10);

// advent 2015 day 5 part 2
doTest(data, d5p2.answer1, "Jaxxeh's day5 part2 answer1", 10);

// advent 2015 day 6 data
data = fs.readFileSync('./day6/input.txt');

// advent 2015 day 6 part 1
doTest(data, d6p1.answer1, "Jaxxeh's day6 part1 answer1", 10);

// advent 2015 day 6 part 2
doTest(data, d6p2.answer1, "Jaxxeh's day6 part2 answer1", 10);

// advent 2015 day 7 data
data = fs.readFileSync('./day7/input.txt');

// advent 2015 day 7 part 1
doTest(data, d7p1.answer1, "Jaxxeh's day7 part1 answer1", 10);

// advent 2015 day 7 part 2
doTest(data, d7p2.answer1, "Jaxxeh's day7 part2 answer1", 10);

// advent 2015 day 8 data
data = fs.readFileSync('./day8/input.txt');

// advent 2015 day 8 part 1
doTest(data, d8p1.answer1, "Jaxxeh's day8 part1 answer1", 10);

// advent 2015 day 8 part 2
doTest(data, d8p2.answer1, "Jaxxeh's day8 part2 answer1", 10);

// advent 2015 day 9 data
data = fs.readFileSync('./day9/input.txt');

// advent 2015 day 9 part 1
doTest(data, d9p1.answer1, "Jaxxeh's day9 part1 answer1", 10);

// advent 2015 day 9 part 2
doTest(data, d9p2.answer1, "Jaxxeh's day9 part2 answer1", 10);

// advent 2015 day 10 data
data = '1113122113';

// advent 2015 day 10 part 1
doTest(data, d10p1.answer1, "Jaxxeh's day10 part1 answer1", 10);

// advent 2015 day 10 part 2
doTest(data, d10p2.answer1, "Jaxxeh's day10 part2 answer1", 1);

// advent 2015 day 11 data
data = 'hepxcrrq';

// advent 2015 day 11 part 1
doTest(data, d11p1.answer1, "Jaxxeh's day11 part1 answer1", 10);

// advent 2015 day 11 part 2
doTest(data, d11p2.answer1, "Jaxxeh's day11 part2 answer1", 1);

// advent 2015 day 12 data
data = fs.readFileSync('./day12/input.txt');

// advent 2015 day 12 part 1
doTest(data, d12p1.answer1, "Jaxxeh's day12 part1 answer1", 1);

// advent 2015 day 12 part 2
doTest(data, d12p2.answer1, "Jaxxeh's day12 part2 answer1", 1);

// advent 2015 day 13 data
data = fs.readFileSync('./day13/input.txt');

// advent 2015 day 13 part 1
doTest(data, d13p1.answer1, "Jaxxeh's day13 part1 answer1", 1);

// advent 2015 day 13 part 2
doTest(data, d13p2.answer1, "Jaxxeh's day13 part2 answer1", 1);

// advent 2015 day 14 data
data = fs.readFileSync('./day14/input.txt');

// advent 2015 day 14 part 1
doTest(data, d14p1.answer1, "Jaxxeh's day14 part1 answer1", 1);

// advent 2015 day 14 part 2
doTest(data, d14p2.answer1, "Jaxxeh's day14 part2 answer1", 1);

// console.log(
//   data
//     .toString()
//     .split('\n')
//     .slice(0, -1)
// );
