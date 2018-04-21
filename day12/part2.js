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

function answer1(data) {
  const obj = JSON.parse(data.toString());

  iterateObj(obj);

  return JSON.stringify(obj)
    .match(/(\-?\d+)/g)
    .map(e => Number.parseInt(e))
    .reduce((acc, e) => acc + e);
}

module.exports = { answer1 };
