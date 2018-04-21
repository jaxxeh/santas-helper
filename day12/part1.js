function answer1(data) {
  return data
    .toString()
    .match(/(\-?\d+)/g)
    .map(e => Number.parseInt(e))
    .reduce((acc, e) => acc + e);
}

module.exports = { answer1 };
