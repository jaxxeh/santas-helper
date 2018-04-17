const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('fc2');
  if (err) {
    console.log(err);
  }
  const arr = data.toString().split('');
  // Using the array.reduce method, we initialize the floor (which
  // is the accumulator in our reducer) to 0, then iterate through
  // the elements of the array, adding 1 to the accumulator on an
  // 'up' instruction, and -1 otherwise. The final accumulator value
  // is the resulting floor level.
  console.log(
    arr.reduce((floor, e) => {
      return floor + (e === '(' ? 1 : -1);
    }, 0)
  );
  console.timeEnd('fc2');
});
