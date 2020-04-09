import { DOWN, LEFT, RIGHT, UP } from './constants';
import moveLeft from './moveLeft';

function reduce(grid) {
  return grid.reduce((accumulator, row, index, array) => {
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

function move(grid, key) {
  if (key === DOWN) {
    return rotateLeft(reduce(rotateRight(grid)));
  }
  if (key === LEFT) {
    return reduce(grid);
  }
  if (key === RIGHT) {
    return rotateLeft(rotateLeft(reduce(rotateRight(rotateRight(grid)))));
  }
  if (key === UP) {
    return rotateRight(reduce(rotateLeft(grid)));
  }
}

function getNext(grid, key) {
  return move(grid, key);
}

export default getNext;
