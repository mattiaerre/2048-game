import addRandom from './addRandom';
import { DOWN, LEFT, RIGHT, UP } from './constants';
import moveLeft from './moveLeft';

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
    [...[matrix[0][0], matrix[1][0], matrix[2][0], matrix[3][0]]]
  ];
}

function rotateRight(matrix) {
  return [
    [...[matrix[3][0], matrix[2][0], matrix[1][0], matrix[0][0]]],
    [...[matrix[3][1], matrix[2][1], matrix[1][1], matrix[0][1]]],
    [...[matrix[3][2], matrix[2][2], matrix[1][2], matrix[0][2]]],
    [...[matrix[3][3], matrix[2][3], matrix[1][3], matrix[0][3]]]
  ];
}

function move(current, key) {
  if (key === DOWN) {
    return rotateLeft(reduce(rotateRight(current)));
  }
  if (key === LEFT) {
    return reduce(current);
  }
  if (key === RIGHT) {
    return rotateLeft(rotateLeft(reduce(rotateRight(rotateRight(current)))));
  }
  if (key === UP) {
    return rotateRight(reduce(rotateLeft(current)));
  }
}

function getNext(current, key) {
  const afterMove = move(current, key);
  return addRandom(afterMove);
}

export default getNext;
