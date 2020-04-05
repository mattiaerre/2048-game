function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addRandom(afterMove) {
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
