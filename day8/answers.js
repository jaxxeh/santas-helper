const parseFileData = require('../utils');

const part1 = {
  answer1: data => {
    return parseFileData(data)
      .map(s => {
        let s2 = s.substring(1, s.length - 1);
        s2 = s2.replace(/\\x[a-f\d]{2}/g, 'k');
        s2 = s2.replace(/\\"/g, 'g');
        s2 = s2.replace(/\\\\/g, 'b');
        return s.length - s2.length;
      })
      .reduce((acc, e) => acc + e);
  }
};

const part2 = {
  answer1: data => {
    return parseFileData(data)
      .map(s => {
        let s2 = s.replace(/\\/g, '\\\\');
        s2 = s2.replace(/\"/g, '\\"');
        s2 = `"${s2}"`;
        return s2.length - s.length;
      })
      .reduce((acc, e) => acc + e);
  }
};

module.exports = { part1, part2 };
