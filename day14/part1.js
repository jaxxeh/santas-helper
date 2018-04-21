function distanceTraveled(reindeer, time) {
  const { speed, duration, rest } = reindeer;
  return (
    (Math.min(time % (duration + rest), duration) +
      Math.floor(time / (duration + rest)) * duration) *
    speed
  );
}

function answer1(data) {
  return Math.max(
    ...data
      .toString()
      .split('\n')
      .slice(0, -1)
      .map(s => {
        const m = s.match(/(\w+) .* (\d+) .* (\d+) .* (\d+)/);
        return {
          name: m[1],
          speed: Number.parseInt(m[2]),
          duration: Number.parseInt(m[3]),
          rest: Number.parseInt(m[4])
        };
      })
      .map(s => distanceTraveled(s, 2503))
  );
}

module.exports = { answer1 };
