function parseData(data) {
  return data
    .toString()
    .split('')
    .map(e => {
      switch (e) {
        case '^':
          return [0, 1];
        case 'v':
          return [0, -1];
        case '>':
          return [1, 0];
        case '<':
          return [-1, 0];
      }
    });
}

const part1 = {
  answer1: data => {
    return parseData(data).reduce(
      (houses, move) => {
        houses.current = [
          houses.current[0] + move[0],
          houses.current[1] + move[1]
        ];
        if (
          !houses.visited.find(
            e => e[0] === houses.current[0] && e[1] === houses.current[1]
          )
        ) {
          houses.visited.push(houses.current);
        }
        return houses;
      },
      { current: [0, 0], visited: [[0, 0]] }
    ).visited.length;
  }
};

const part2 = {
  answer1: data => {
    return parseData(data).reduce(
      (houses, move, i) => {
        const key = i % 2 === 0 ? 'santa' : 'robot';
        houses[key] = [houses[key][0] + move[0], houses[key][1] + move[1]];
        if (
          !houses.visited.find(
            e => e[0] === houses[key][0] && e[1] === houses[key][1]
          )
        ) {
          houses.visited.push(houses[key]);
        }
        return houses;
      },
      { santa: [0, 0], robot: [0, 0], visited: [[0, 0]] }
    ).visited.length;
  }
};

module.exports = { part1, part2 };
