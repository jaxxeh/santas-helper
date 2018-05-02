const test1 = /.*(abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz).*/;
const test2 = /.*([a-hjkmnp-z])\1.*([a-hjkmnp-z])\2.*/;

function incrLetterAt(str, index) {
  const arr = str.split('');
  if (['h', 'k', 'n'].includes(arr[index])) {
    arr[index] = String.fromCharCode(arr[index].charCodeAt(0) + 2);
  } else if (arr[index] === 'z') {
    arr[index] = 'a';
    return incrLetterAt(arr.join(''), index - 1);
  } else {
    arr[index] = String.fromCharCode(arr[index].charCodeAt(0) + 1);
  }
  return arr.join('');
}

function nextPwd(pwd) {
  let newPwd = pwd;
  do {
    newPwd = incrLetterAt(newPwd, newPwd.length - 1);
  } while (!test1.test(newPwd) || !test2.test(newPwd));
  return newPwd;
}

const part1 = {
  answer1: data => {
    return nextPwd(data.toString().slice(0, -1));
  }
};

const part2 = {
  answer1: data => {
    return nextPwd(nextPwd(data.toString().slice(0, -1)));
  }
};

module.exports = { part1, part2 };
