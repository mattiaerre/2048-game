import addRandom from './addRandom';

const emptyState = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null]
];

const initialState = addRandom(emptyState);

export default initialState;
