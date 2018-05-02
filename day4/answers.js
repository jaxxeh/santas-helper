const crypto = require('crypto');

function findHash(data, n) {
  let k = 0;
  const regex = new RegExp(`^0{${n}}`);
  while (
    !regex.test(
      crypto
        .createHash('md5')
        .update(data + k)
        .digest('hex')
    )
  ) {
    k++;
  }
  return k;
}

const part1 = {
  answer1: data => {
    return findHash(data.toString().slice(0, -1), 5);
  }
};

const part2 = {
  answer1: data => {
    return findHash(data.toString().slice(0, -1), 6);
  }
};

module.exports = { part1, part2 };
