const routes = {},
  cities = [];

function swap(arr, i, j) {
  const tmp = arr[arr.length - i];
  arr[arr.length - i] = arr[arr.length - j];
  arr[arr.length - j] = tmp;
}

function compRoute(arr) {
  return arr
    .map((c, i, a) => {
      let rt;
      if (i > 0) {
        if (c < a[i - 1]) {
          rt = `${c}${a[i - 1]}`;
        } else {
          rt = `${a[i - 1]}${c}`;
        }
        return routes[rt];
      } else {
        return 0;
      }
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
      const m = s.match(/^(\w+) to (\w+) = (\d+)/);
      if (!cities.includes(m[1])) {
        i1 = cities.push(m[1]) - 1;
      } else {
        i1 = cities.indexOf(m[1]);
      }
      if (!cities.includes(m[2])) {
        i2 = cities.push(m[2]) - 1;
      } else {
        i2 = cities.indexOf(m[2]);
      }
      routes[`${i1}${i2}`] = Number.parseInt(m[3]);
    });

  const route = [...cities.keys()];
  let bestRoute = compRoute(route),
    currentRoute = bestRoute;
  let savedBest = [...route];

  for (let i = 1; i < 35280; i++) {
    if (i % 30240 === 0) {
      swap(route, 8, 2);
    } else if (i % 25200 === 0) {
      swap(route, 8, 3);
    } else if (i % 20160 === 0) {
      swap(route, 8, 4);
    } else if (i % 15120 === 0) {
      swap(route, 8, 5);
    } else if (i % 5040 === 0) {
      swap(route, 8, 7);
    } else if (i % 720 === 0) {
      swap(route, 7, 6);
    } else if (i % 720 === 720 - 120) {
      swap(route, 6, 1);
    } else if (i % 720 === 720 - 240) {
      swap(route, 6, 2);
    } else if (i % 720 === 720 - 360) {
      swap(route, 6, 3);
    } else if (i % 120 === 0) {
      swap(route, 6, 5);
    } else if (i % 24 === 0) {
      swap(route, 5, 4);
    } else if (i % 24 === 24 - 6) {
      swap(route, 4, 1);
    } else if (i % 6 === 0) {
      swap(route, 4, 3);
    } else if (i % 2 === 0) {
      swap(route, 3, 2);
    } else {
      swap(route, 2, 1);
    }
    currentRoute = compRoute(route);
    if (currentRoute < bestRoute) {
      bestRoute = currentRoute;
      savedBest = [...route];
    }
  }

  return bestRoute;
}

module.exports = { answer1 };
