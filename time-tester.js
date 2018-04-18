// Given a data input, a function callback and a target number
// of runs, display the solution and an average processing time over
// the number of runs.
//
// Input params:
// Buffer data (data to run the callback on)
// function callback (callback to test using the provided data)
// int runs (# of runs to average processing time over - defaults to 1000)
// string name (the name of the script being tested)
//
// Output:
// Logs the name of the script, the number of runs, the result of
// the callback, and the average time of execution to the screen

function doTest(data, callback, name, runs = 1000) {
  let time,
    total = 0,
    ret;
  for (let i = 0; i < runs; i++) {
    time = process.hrtime();
    ret = callback(data);
    time = process.hrtime(time);
    total += time[0] * 1e9 + time[1];
  }
  console.log(`Results for ${name}:`);
  console.log(`Callback return value => ${ret}`);
  console.log(
    `Avg execution time => ${total / (1e6 * runs)} ms over ${runs} runs`
  );
  console.log('---------------------------------------------');
}

module.exports = doTest;
