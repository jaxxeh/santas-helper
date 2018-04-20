function answer1(data) {
  return data
    .toString()
    .split('\n')
    .slice(0, -1)
    .filter(s => /(.{2}).*?\1/.test(s))
    .filter(s => /(.).\1/.test(s)).length;
}

module.exports = { answer1 };
