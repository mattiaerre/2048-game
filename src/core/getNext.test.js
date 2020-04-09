import { DOWN, LEFT, RIGHT, UP } from './constants';
import getNext from './getNext';

const grid00 = [
  [null, null, null, null],
  [null, null, 2, null],
  [null, null, null, null],
  [null, null, null, 2]
];

const grid01 = [
  [null, null, null, null],
  [2, null, null, null],
  [null, null, null, null],
  [2, null, null, null]
];

const grid02 = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [4, null, null, null]
];

const grid03 = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, 4]
];

const grid04 = [
  [null, null, null, 4],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null]
];

const scenarios = [
  { grid: grid00, key: LEFT, next: grid01 },
  { grid: grid01, key: DOWN, next: grid02 },
  { grid: grid02, key: RIGHT, next: grid03 },
  { grid: grid03, key: UP, next: grid04 }
];

scenarios.forEach(({ grid, key, next }) => {
  test(`key ${key}`, () => {
    expect(getNext(grid, key)).toEqual(next);
  });
});
