function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addRandom(grid) {
  const copy = JSON.parse(JSON.stringify(grid)); // deep copy
  if (
    copy[0][0] !== null &&
    copy[0][1] !== null &&
    copy[0][2] !== null &&
    copy[0][3] !== null &&
    copy[1][0] !== null &&
    copy[1][1] !== null &&
    copy[1][2] !== null &&
    copy[1][3] !== null &&
    copy[2][0] !== null &&
    copy[2][1] !== null &&
    copy[2][2] !== null &&
    copy[2][3] !== null &&
    copy[3][0] !== null &&
    copy[3][1] !== null &&
    copy[3][2] !== null &&
    copy[3][3] !== null
  ) {
    return copy;
  }
  const x = getRandomInt(4);
  const y = getRandomInt(4);
  if (copy[x][y] === null) {
    copy[x][y] = 2;
    return copy;
  } else {
    return addRandom(copy);
  }
}

export default addRandom;
