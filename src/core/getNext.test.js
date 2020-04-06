import getNext, { DOWN, LEFT, RIGHT, UP } from './getNext';
import mockAddRandom from './mockAddRandom';

jest.mock('./addRandom', () => (afterMove) => mockAddRandom(afterMove));

const state00 = [
  [null, null, null, null],
  [null, null, 2, null],
  [null, null, null, null],
  [null, null, null, 2]
];

const state01 = [
  [null, null, null, null],
  [2, null, null, null],
  [null, null, null, null],
  [2, null, null, 2] // random
];

const state02 = [
  [2, null, null, null], // random
  [2, null, null, null],
  [null, null, null, null],
  [4, null, null, null]
];

const state03 = [
  [null, null, null, null],
  [null, null, 2, null], // random
  [4, null, null, null],
  [4, null, null, null]
];

const state04 = [
  [null, 2, null, null], // random
  [null, null, null, null],
  [null, null, null, null],
  [8, null, 2, null]
];

const state05 = [
  [null, null, null, 2],
  [null, null, null, null],
  [2, null, null, null], // random
  [null, null, 8, 2]
];

const state06 = [
  [2, null, 8, 4],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, 2] // random
];

const scenarios = [
  { current: state00, key: LEFT, next: state01 },
  { current: state01, key: LEFT, next: state02 },
  { current: state02, key: DOWN, next: state03 },
  { current: state03, key: DOWN, next: state04 },
  { current: state04, key: RIGHT, next: state05 },
  { current: state05, key: UP, next: state06 }
];

scenarios.forEach(({ current, key, next }) => {
  test(`key ${key}`, () => {
    expect(getNext(current, key)).toEqual(next);
  });
});
