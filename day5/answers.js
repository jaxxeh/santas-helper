const parseFileData = require('../utils');

const part1 = {
  answer1: data => {
    return parseFileData(data)
      .filter(s => {
        return s.replace(/[^aeiou]/g, '').length > 2;
      })
      .filter(s => /(.)\1/.test(s))
      .filter(s => !/(ab|cd|pq|xy)/.test(s)).length;
  }
};

const part2 = {
  answer1: data => {
    return parseFileData(data)
      .filter(s => /(.{2}).*?\1/.test(s))
      .filter(s => /(.).\1/.test(s)).length;
  }
};

module.exports = { part1, part2 };
