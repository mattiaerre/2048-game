import { DOWN, emptyGrid, LEFT, NEW_GAME, RIGHT, UP } from '../core/constants';
import addRandom from '../core/addRandom';
import getNext from '../core/getNext';

function reducer(state, action) {
  switch (action.type) {
    case DOWN:
    case LEFT:
    case RIGHT:
    case UP:
      return { ...state, grid: getNext(state.grid, action.type) };
    case NEW_GAME:
      return { ...state, grid: addRandom(emptyGrid) };
    default:
  }
}

export default reducer;
