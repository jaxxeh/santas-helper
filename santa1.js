const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('fc1');
  if (err) {
    console.log(err);
  }
  const arr = data.toString().split('');
  // Consider T the total number of instructions (i.e. the size of the input),
  // U the number of 'up' instructions ['(' inputs] and D the number of
  // 'down' instructions [')' inputs]. We know that:
  // T = U + D
  // FLOOR = U - D = (T - D) - D = T - 2*D
  // So the floor level will be the size of the input array minus
  // twice the size of the 'down' instructions array, computed by
  // using the array.filter method
  console.log(arr.length - 2 * arr.filter(e => e === ')').length);
  // Alternatively, FLOOR = 2*U - T, and:
  // console.log(2 * arr.filter(e => e === '(').length - arr.length);
  console.timeEnd('fc1');
});
