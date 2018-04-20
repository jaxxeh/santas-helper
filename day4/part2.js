const crypto = require('crypto');

function answer1(data) {
  let k = 0;
  while (
    !/^0{6}/.test(
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

module.exports = { answer1 };
