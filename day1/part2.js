function answer1(data) {
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
      return position;
    }
  }
  return 'floor not reached';
}

function answer2(data) {
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
  return /^\)/.test(str) ? position : 'floor not reached';
}

module.exports = { answer1, answer2 };
