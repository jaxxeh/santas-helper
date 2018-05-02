function lookAndSay(input) {
  const m = input.match(/(\d)\1*/g);
  return m.map(s => s.length.toString() + s[0]).reduce((acc, e) => acc + e);
}

const part1 = {
  answer1: data => {
    let k = data.toString().slice(0, -1);
    for (let i = 0; i < 40; i++) {
      k = lookAndSay(k);
    }
    return k.length;
  }
};

const part2 = {
  answer1: data => {
    let k = data.toString().slice(0, -1);
    for (let i = 0; i < 50; i++) {
      k = lookAndSay(k);
    }
    return k.length;
  }
};

module.exports = { part1, part2 };
