function parse(data) {
  return data
    .toString()
    .split('\n')
    .slice(0, -1);
}

module.exports = parse;
