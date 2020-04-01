import addRandom from './addRandom';
import moveLeft from './moveLeft';

export const DOWN = 'DOWN';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const UP = 'UP';

function reduce(current) {
  return current.reduce((accumulator, row, index, array) => {
    accumulator[index] = moveLeft(row);
    return accumulator;
  }, []);
}

function rotateLeft(matrix) {
  return [
    [...[matrix[0][3], matrix[1][3], matrix[2][3], matrix[3][3]]],
    [...[matrix[0][2], matrix[1][2], matrix[2][2], matrix[3][2]]],
    [...[matrix[0][1], matrix[1][1], matrix[2][1], matrix[3][1]]],
    [...[matrix[0][0], matrix[1][0], matrix[2][0], matrix[3][0]]],
  ];
}

function rotateRight(matrix) {
  return [
    [...[matrix[3][0], matrix[2][0], matrix[1][0], matrix[0][0]]],
    [...[matrix[3][1], matrix[2][1], matrix[1][1], matrix[0][1]]],
    [...[matrix[3][2], matrix[2][2], matrix[1][2], matrix[0][2]]],
    [...[matrix[3][3], matrix[2][3], matrix[1][3], matrix[0][3]]],
  ];
}

function move(arrow, current) {
  if (arrow === DOWN) {
    return rotateLeft(reduce(rotateRight(current)));
  }
  if (arrow === LEFT) {
    return reduce(current);
  }
  if (arrow === RIGHT) {
    return rotateLeft(rotateLeft(reduce(rotateRight(rotateRight(current)))));
  }
  if (arrow === UP) {
    return rotateRight(reduce(rotateLeft(current)));
  }
}

function getNext(arrow, current) {
  const afterMove = move(arrow, current);
  return addRandom(afterMove);
}

export default getNext;
