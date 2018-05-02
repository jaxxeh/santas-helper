function checkForRed(obj) {
  return Object.values(obj).includes('red');
}

function iterateObj(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      for (e of obj) {
        if (typeof e === 'object') {
          if (!Array.isArray(e) && checkForRed(e)) {
            obj[obj.indexOf(e)] = {};
          } else {
            iterateObj(e);
          }
        }
      }
    } else {
      for (const p in obj) {
        if (typeof obj[p] === 'object') {
          if (!Array.isArray(obj[p]) && checkForRed(obj[p])) {
            delete obj[p];
          } else {
            iterateObj(obj[p]);
          }
        }
      }
    }
  }
}

function objSum(data) {
  return data
    .match(/(\-?\d+)/g)
    .map(e => Number.parseInt(e))
    .reduce((acc, e) => acc + e);
}

const part1 = {
  answer1: data => {
    return objSum(data.toString());
  }
};

const part2 = {
  answer1: data => {
    const obj = JSON.parse(data.toString());
    iterateObj(obj);
    return objSum(JSON.stringify(obj));
  }
};

module.exports = { part1, part2 };
