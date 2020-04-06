import addRandom from '../core/addRandom';

const emptyState = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null]
];

const state001 = [
  [2, null, null, null],
  [4, 2, null, 2],
  [8, 4, 2, null],
  [32, 8, 4, 2]
];

const initialState = addRandom(emptyState);

export default initialState;
