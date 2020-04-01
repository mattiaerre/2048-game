let counter = 0;

function addRandom(afterMove) {
  let afterAddRandom;
  if (counter === 0) {
    afterAddRandom = [
      [...afterMove[0]],
      [...afterMove[1]],
      [...afterMove[2]],
      [...[afterMove[3][0], afterMove[3][1], afterMove[3][2], 2]],
    ];
  }
  if (counter === 1) {
    afterAddRandom = [
      [...[2, afterMove[0][1], afterMove[0][2], afterMove[0][3]]],
      [...afterMove[1]],
      [...afterMove[2]],
      [...afterMove[3]],
    ];
  }
  if (counter === 2) {
    afterAddRandom = [
      [...afterMove[0]],
      [...[afterMove[1][0], afterMove[1][1], 2, afterMove[1][3]]],
      [...afterMove[2]],
      [...afterMove[3]],
    ];
  }
  if (counter === 3) {
    afterAddRandom = [
      [...[afterMove[0][0], 2, afterMove[0][2], afterMove[0][3]]],
      [...afterMove[1]],
      [...afterMove[2]],
      [...afterMove[3]],
    ];
  }
  if (counter === 4) {
    afterAddRandom = [
      [...afterMove[0]],
      [...afterMove[1]],
      [...[2, afterMove[2][1], afterMove[2][2], afterMove[2][3]]],
      [...afterMove[3]],
    ];
  }
  if (counter === 5) {
    afterAddRandom = [
      [...afterMove[0]],
      [...afterMove[1]],
      [...afterMove[2]],
      [...[afterMove[3][0], afterMove[3][1], afterMove[3][2], 2]],
    ];
  }
  counter += 1;
  return afterAddRandom || afterMove;
}

export default addRandom;
