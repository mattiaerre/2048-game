import { DOWN, emptyState, LEFT, NEW_GAME, RIGHT, UP } from '../core/constants';
import addRandom from '../core/addRandom';
import getNext from '../core/getNext';

function reducer(state, action) {
  switch (action.type) {
    case DOWN:
    case LEFT:
    case RIGHT:
    case UP:
      return getNext(state, action.type);
    case NEW_GAME:
      return addRandom(emptyState);
    default:
  }
}

export default reducer;
