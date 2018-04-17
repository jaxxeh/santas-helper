const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('fc4');
  if (err) {
    console.log(err);
  }
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
  console.log(m ? m[2].length - m[1].length : 0);
  console.timeEnd('fc4');
});
