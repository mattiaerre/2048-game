import addRandom from '../core/addRandom';
import { emptyState } from '../core/constants';

const state001 = [
  [2, null, null, null],
  [4, 2, null, 2],
  [8, 4, 2, null],
  [32, 8, 4, 2]
];

const state002 = [
  [2, 8, 4, 2],
  [8, 128, 8, 4],
  [16, 32, 16, 32],
  [2, 4, 8, 4]
];

const initialState = addRandom(emptyState);

export default initialState;
