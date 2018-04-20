function answer1(data) {
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
    })
    .reduce(
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

module.exports = { answer1 };
