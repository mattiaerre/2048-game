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
  { arrow: LEFT, current: state00, next: state01 },
  { arrow: LEFT, current: state01, next: state02 },
  { arrow: DOWN, current: state02, next: state03 },
  { arrow: DOWN, current: state03, next: state04 },
  { arrow: RIGHT, current: state04, next: state05 },
  { arrow: UP, current: state05, next: state06 }
];

scenarios.forEach(({ arrow, current, next }) => {
  test(`key ${arrow}`, () => {
    expect(getNext(arrow, current)).toEqual(next);
  });
});
