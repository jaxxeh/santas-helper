function answer1(data) {
  const lights = new Array(1000000);
  lights.fill(false);
  data
    .toString()
    .split('\n')
    .slice(0, -1)
    .map(s => {
      const m = s.match(/^(.*?) (\d+),(\d+) through (\d+),(\d+)$/);
      return {
        type: m[1],
        x: [Number.parseInt(m[2]), Number.parseInt(m[3])],
        y: [Number.parseInt(m[4]), Number.parseInt(m[5])]
      };
    })
    .forEach(o => {
      for (let j = o.x[1]; j <= o.y[1]; j++) {
        for (let i = o.x[0]; i <= o.y[0]; i++) {
          switch (o.type) {
            case 'toggle':
              lights[i + 1000 * j] = !lights[i + 1000 * j];
              break;
            case 'turn on':
              lights[i + 1000 * j] = true;
              break;
            case 'turn off':
              lights[i + 1000 * j] = false;
              break;
          }
        }
      }
    });
  return lights.filter(l => l).length;
}

module.exports = { answer1 };
