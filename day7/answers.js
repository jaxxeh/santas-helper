function resolver(wiring) {
  const resolved = {};
  let str = wiring.slice();
  while (str.some(s => !s.resolved)) {
    str.filter(s => Object.keys(resolved).includes(s.input)).forEach(s => {
      s.input = resolved[s.input];
      if (s.hasOwnProperty('op')) {
        if (s.op === 'NOT' || Number.isInteger(s.input2)) {
          switch (s.op) {
            case 'NOT':
              s.input = ~s.input & 0xffff;
              break;
            case 'AND':
              s.input = s.input & s.input2;
              break;
            case 'OR':
              s.input = (s.input | s.input2) & 0xffff;
              break;
            case 'LSHIFT':
              s.input = (s.input << s.input2) & 0xffff;
              break;
            case 'RSHIFT':
              s.input = (s.input >>> s.input2) & 0xffff;
              break;
          }
          s.resolved = true;
        }
      } else {
        s.resolved = true;
      }
    });
    str
      .filter(
        s =>
          s.hasOwnProperty('input2') && Object.keys(resolved).includes(s.input2)
      )
      .forEach(s => {
        s.input2 = resolved[s.input2];
        if (Number.isInteger(s.input)) {
          switch (s.op) {
            case 'AND':
              s.input = s.input & s.input2;
              break;
            case 'OR':
              s.input = (s.input | s.input2) & 0xffff;
              break;
            case 'LSHIFT':
              s.input = (s.input << s.input2) & 0xffff;
              break;
            case 'RSHIFT':
              s.input = (s.input >>> s.input2) & 0xffff;
              break;
          }
          s.resolved = true;
        }
      });
    str.filter(s => s.resolved).forEach(s => (resolved[s.wire] = s.input));
    str = str.filter(s => !s.resolved);
  }
  return resolved['a'];
}

function parseOps(data) {
  return data
    .toString()
    .split('\n')
    .slice(0, -1)
    .map(s => {
      let m;
      if (/^(\d+?) \-> ([a-z]+)$/.test(s)) {
        m = s.match(/^(\d+?) \-> ([a-z]+)$/);
        return {
          wire: m[2],
          input: Number.parseInt(m[1]),
          resolved: true
        };
      } else if (/^([a-z]+) \-> ([a-z]+)$/.test(s)) {
        m = s.match(/^([a-z]+) \-> ([a-z]+)$/);
        return {
          wire: m[2],
          input: m[1],
          resolved: false
        };
      } else if (/^NOT ([a-z]+) \-> ([a-z]+)$/.test(s)) {
        m = s.match(/^NOT ([a-z]+) \-> ([a-z]+)$/);
        return {
          wire: m[2],
          input: m[1],
          op: 'NOT',
          resolved: false
        };
      } else if (/^([a-z]+) (AND|OR) ([a-z]+) \-> ([a-z]+)$/.test(s)) {
        m = s.match(/^([a-z]+) (AND|OR) ([a-z]+) \-> ([a-z]+)$/);
        return {
          wire: m[4],
          input: m[1],
          input2: m[3],
          op: m[2],
          resolved: false
        };
      } else if (/^(\d+) (AND|OR) ([a-z]+) \-> ([a-z]+)$/.test(s)) {
        m = s.match(/^(\d+) (AND|OR) ([a-z]+) \-> ([a-z]+)$/);
        return {
          wire: m[4],
          input: m[3],
          input2: Number.parseInt(m[1]),
          op: m[2],
          resolved: false
        };
      } else if (/^([a-z]+) ([LR]SHIFT) (\d+) \-> ([a-z]+)$/.test(s)) {
        m = s.match(/^([a-z]+) ([LR]SHIFT) (\d+) \-> ([a-z]+)$/);
        return {
          wire: m[4],
          input: m[1],
          input2: Number.parseInt(m[3]),
          op: m[2],
          resolved: false
        };
      }
    });
}

const part1 = {
  answer1: data => {
    const wiring = parseOps(data);
    return resolver(wiring);
  }
};

const part2 = {
  answer1: data => {
    const wiring1 = parseOps(data);
    const wiring2 = parseOps(data);
    wiring2.find(s => s.wire === 'b').input = resolver(wiring1);
    return resolver(wiring2);
  }
};

module.exports = { part1, part2 };
