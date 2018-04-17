const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('fc3');
  if (err) {
    console.log(err);
  }
  // A similar approach to array.reduce, but using the built-in iterator
  // that comes with the Buffer class in Node.
  // We iterate through the entire buffer, increasing the floor when the
  // instruction matches an 'up' value, decreasing it otherwise.
  let floor = 0;
  for (const e of data) {
    e === 40 ? floor++ : floor--;
  }
  console.log(floor);
  console.timeEnd('fc3');
});
