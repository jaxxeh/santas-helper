function lookAndSay(input) {
  const m = input.match(/(\d)\1*/g);
  return m.map(s => s.length.toString() + s[0]).reduce((acc, e) => acc + e);
}

function answer1(data) {
  let k = data;
  for (let i = 0; i < 40; i++) {
    k = lookAndSay(k);
  }
  return k.length;
}

module.exports = { answer1 };
