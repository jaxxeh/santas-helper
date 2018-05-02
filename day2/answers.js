const part1 = {
  answer1: data => {
    return data
      .toString()
      .split('\n')
      .slice(0, -1)
      .map(e =>
        e
          .split('x')
          .map((v, i, a) => v * a[(i + 1) % a.length])
          .sort((e1, e2) => e1 >= e2)
          .reduce((area, e, i) => (i ? area + 2 * e : area + 3 * e), 0)
      )
      .reduce((total, e) => total + e);
  }
};

const part2 = {
  answer1: data => {
    return data
      .toString()
      .split('\n')
      .slice(0, -1)
      .map(e =>
        e
          .split('x')
          .map(e => Number.parseInt(e))
          .sort((e1, e2) => e1 >= e2)
          .map((e, i, v) => {
            if (i === 0) {
              return v[0] * 2 + v[1] * 2;
            } else if (i === 1) {
              return v[0] * v[1] * v[2];
            }
          })
          .slice(0, -1)
          .reduce((ribbon, e) => ribbon + e)
      )
      .reduce((total, e) => total + e);
  }
};

module.exports = { part1, part2 };
