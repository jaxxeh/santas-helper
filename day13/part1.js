const happ = {},
  names = [];

function swap(arr, i, j) {
  const tmp = arr[arr.length - i];
  arr[arr.length - i] = arr[arr.length - j];
  arr[arr.length - j] = tmp;
}

function compHappiness(arr) {
  return arr
    .map((c, i, a) => {
      return (
        happ[`${c}${a[(i + 1) % a.length]}`] +
        happ[`${a[(i + 1) % a.length]}${c}`]
      );
    })
    .reduce((acc, r) => acc + r);
}

function answer1(data) {
  data
    .toString()
    .split('\n')
    .slice(0, -1)
    .forEach(s => {
      let i, j;
      const m = s.match(/^(\w+) would (gain|lose) (\d+) .* (\w+)\./);
      if (!names.includes(m[1])) {
        i1 = names.push(m[1]) - 1;
      } else {
        i1 = names.indexOf(m[1]);
      }
      if (!names.includes(m[4])) {
        i2 = names.push(m[4]) - 1;
      } else {
        i2 = names.indexOf(m[4]);
      }
      happ[`${i1}${i2}`] = Number.parseInt(m[3]) * (m[2] === 'lose' ? -1 : 1);
    });

  const table = [...names.keys()];
  let maxHappiness = compHappiness(table),
    currentHappiness = maxHappiness;
  let bestTable = [...table];

  for (let i = 1; i < 5040; i++) {
    if (i % 720 === 0) {
      swap(table, 7, 6);
    } else if (i % 720 === 720 - 120) {
      swap(table, 6, 1);
    } else if (i % 720 === 720 - 240) {
      swap(table, 6, 2);
    } else if (i % 720 === 720 - 360) {
      swap(table, 6, 3);
    } else if (i % 120 === 0) {
      swap(table, 6, 5);
    } else if (i % 24 === 0) {
      swap(table, 5, 4);
    } else if (i % 24 === 24 - 6) {
      swap(table, 4, 1);
    } else if (i % 6 === 0) {
      swap(table, 4, 3);
    } else if (i % 2 === 0) {
      swap(table, 3, 2);
    } else {
      swap(table, 2, 1);
    }
    currentHappiness = compHappiness(table);
    if (currentHappiness > maxHappiness) {
      maxHappiness = currentHappiness;
      bestTable = [...table];
    }
  }

  console.log(bestTable);
  return maxHappiness;
}

module.exports = { answer1 };
