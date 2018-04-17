const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('fc2-2');
  if (err) {
    console.log(err);
  }
  let str = data.toString();
  // A solution to part 2 using regex and recursion.
  // While the input begins with an opening parens, we look for the
  // first innermost matching pair, remove it, and add 2 to the position.
  // When and if the string starts with a closing parens, we exit our
  // recursive loop and print out our solution (this IS the first time
  // we will reach floor -1, and we have recursively removed and counted
  // all prior instructions).
  let position = 1;
  while (/^\(+?\)/.test(str)) {
    str = str.replace(/\(\)/, '');
    position += 2;
  }
  if (/^\)/.test(str)) {
    console.log(position);
  } else {
    console.log('floor not reached');
  }
  console.timeEnd('fc2-2');
});
