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
      (houses, move, i) => {
        if (i % 2 === 0) {
          houses.current1 = [
            houses.current1[0] + move[0],
            houses.current1[1] + move[1]
          ];
          if (
            !houses.visited.find(
              e => e[0] === houses.current1[0] && e[1] === houses.current1[1]
            )
          ) {
            houses.visited.push(houses.current1);
          }
        } else {
          houses.current2 = [
            houses.current2[0] + move[0],
            houses.current2[1] + move[1]
          ];
          if (
            !houses.visited.find(
              e => e[0] === houses.current2[0] && e[1] === houses.current2[1]
            )
          ) {
            houses.visited.push(houses.current2);
          }
        }
        return houses;
      },
      { current1: [0, 0], current2: [0, 0], visited: [[0, 0]] }
    ).visited.length;
}

module.exports = { answer1 };
