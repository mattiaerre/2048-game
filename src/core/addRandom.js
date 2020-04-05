function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addRandom(afterMove) {
  if (
    afterMove[0][0] !== null &&
    afterMove[0][1] !== null &&
    afterMove[0][2] !== null &&
    afterMove[0][3] !== null &&
    afterMove[1][0] !== null &&
    afterMove[1][1] !== null &&
    afterMove[1][2] !== null &&
    afterMove[1][3] !== null &&
    afterMove[2][0] !== null &&
    afterMove[2][1] !== null &&
    afterMove[2][2] !== null &&
    afterMove[2][3] !== null &&
    afterMove[3][0] !== null &&
    afterMove[3][1] !== null &&
    afterMove[3][2] !== null &&
    afterMove[3][3] !== null
  ) {
    return afterMove;
  }
  const x = getRandomInt(4);
  const y = getRandomInt(4);
  if (afterMove[x][y] === null) {
    const copy = [...afterMove];
    copy[x][y] = 2;
    return copy;
  } else {
    return addRandom(afterMove);
  }
}

export default addRandom;
