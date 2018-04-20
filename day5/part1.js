function answer1(data) {
  return data
    .toString()
    .split('\n')
    .slice(0, -1)
    .filter(s => {
      return s.replace(/[^aeiou]/g, '').length > 2;
    })
    .filter(s => /(.)\1/.test(s))
    .filter(s => !/(ab|cd|pq|xy)/.test(s)).length;
}

module.exports = { answer1 };
