function santa1(data) {
  const arr = data.toString().split('');
  // Consider T the total number of instructions (i.e. the size of the input),
  // U the number of 'up' instructions ['(' inputs] and D the number of
  // 'down' instructions [')' inputs]. We know that:
  // T = U + D
  // FLOOR = U - D = (T - D) - D = T - 2*D
  // So the floor level will be the size of the input array minus
  // twice the size of the 'down' instructions array, computed by
  // using the array.filter method
  return arr.length - 2 * arr.filter(e => e === ')').length;
  // Alternatively, FLOOR = 2*U - T, and:
  // return (2 * arr.filter(e => e === '(').length - arr.length);
}

function santa2(data) {
  // Using the array.reduce method, we initialize the floor (which
  // is the accumulator in our reducer) to 0, then iterate through
  // the elements of the array, adding 1 to the accumulator on an
  // 'up' instruction, and -1 otherwise. The final accumulator value
  // is the resulting floor level.
  return data
    .toString()
    .split('')
    .reduce((floor, e) => {
      return floor + (e === '(' ? 1 : -1);
    }, 0);
}

function santa3(data) {
  // A similar approach to array.reduce, but using the built-in iterator
  // that comes with the Buffer class in Node.
  // We iterate through the entire buffer, increasing the floor when the
  // instruction matches an 'up' value, decreasing it otherwise.
  let floor = 0;
  for (const e of data) {
    e === 40 ? floor++ : floor--;
  }
  return floor;
}

function santa4(data) {
  let str = data.toString();
  // A last approach using regular expressions, slightly less efficient
  // but interesting nonetheless.
  // We recursively remove any matching pairs of parentheses, until
  // no such pairs are found.
  // The resulting string will be a group of closing parentheses followed
  // by a group of opening parentheses.
  // A final regular expression match will return both groups in arrays, the
  // difference in size of these arrays will be the resulting floor level.
  while (/\(\)/.test(str)) {
    str = str.replace(/\(\)/g, '');
  }
  const m = str.match(/^(\)*)(\(*)$/);
  return m ? m[2].length - m[1].length : 0;
}

module.exports = { santa1, santa2, santa3, santa4 };
