const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('fc2-1');
  if (err) {
    console.log(err);
  }
  // An answer to part 2 of the challenge, building up on santa3.js
  // The idea is to keep track of the position in the buffer, and to
  // stop iteration when we get to the desired floor
  const TARGET_FLOOR = -1;
  let floor = 0,
    position = 0;
  for (const e of data) {
    position++;
    e === 40 ? floor++ : floor--;
    if (floor === TARGET_FLOOR) {
      console.log(position);
      break;
    }
  }
  if (floor !== TARGET_FLOOR) {
    console.log('floor not reached');
  }
  console.timeEnd('fc2-1');
});
