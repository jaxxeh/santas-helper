function answer1(data) {
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

module.exports = { answer1 };
