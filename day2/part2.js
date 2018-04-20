function answer1(data) {
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

module.exports = { answer1 };
