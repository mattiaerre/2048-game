import addRandom from '../core/addRandom';
import { emptyGrid } from '../core/constants';

const grid001 = [
  [2, null, null, null],
  [4, 2, null, 2],
  [8, 4, 2, null],
  [32, 8, 4, 2]
];

const grid002 = [
  [2, 8, 4, 2],
  [8, 128, 8, 4],
  [16, 32, 16, 32],
  [2, 4, 8, 4]
];

const initialState = { grid: addRandom(emptyGrid), score: 0 };

export default initialState;
