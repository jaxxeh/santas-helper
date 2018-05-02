function distanceTraveled(reindeer, time) {
  const { speed, duration, rest } = reindeer;
  return (
    (Math.min(time % (duration + rest), duration) +
      Math.floor(time / (duration + rest)) * duration) *
    speed
  );
}

function parseReindeers(data) {
  return data
    .toString()
    .split('\n')
    .slice(0, -1)
    .map(s => {
      const m = s.match(/(\w+) .* (\d+) .* (\d+) .* (\d+)/);
      return {
        name: m[1],
        speed: Number.parseInt(m[2]),
        duration: Number.parseInt(m[3]),
        rest: Number.parseInt(m[4]),
        traveled: 0,
        score: 0
      };
    });
}

const part1 = {
  answer1: data => {
    return Math.max(
      ...parseReindeers(data).map(s => distanceTraveled(s, 2503))
    );
  }
};

const part2 = {
  answer1: data => {
    const reindeers = parseReindeers(data);
    let time = 0;
    do {
      time++;
      reindeers.forEach(r => {
        r.traveled = distanceTraveled(r, time);
      });
      reindeers.find(
        r => r.traveled === Math.max(...reindeers.map(s => s.traveled))
      ).score++;
    } while (time < 2503);
    return Math.max(...reindeers.map(r => r.score));
  }
};

module.exports = { part1, part2 };
