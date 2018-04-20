function answer1(data) {
  return data
    .toString()
    .split('\n')
    .slice(0, -1)
    .map(s => {
      let s2 = s.substring(1, s.length - 1);
      s2 = s2.replace(/\\x[a-f\d]{2}/g, 'k');
      s2 = s2.replace(/\\"/g, 'g');
      s2 = s2.replace(/\\\\/g, 'b');
      return s.length - s2.length;
    })
    .reduce((acc, e) => acc + e);
}

module.exports = { answer1 };
