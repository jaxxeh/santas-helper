function answer1(data) {
  return data
    .toString()
    .split('\n')
    .slice(0, -1)
    .map(s => {
      let s2 = s.replace(/\\/g, '\\\\');
      s2 = s2.replace(/\"/g, '\\"');
      s2 = `"${s2}"`;
      return s2.length - s.length;
    })
    .reduce((acc, e) => acc + e);
}

module.exports = { answer1 };
