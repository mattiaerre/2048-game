import { DOWN, LEFT, NEW_GAME, RIGHT, UP } from '../core/constants';
import getNext from '../core/getNext';
import initialState from './initialState';

function reducer(state, action) {
  switch (action.type) {
    case DOWN:
    case LEFT:
    case RIGHT:
    case UP:
      return getNext(state, action.type);
    case NEW_GAME:
      return initialState;
    default:
  }
}

export default reducer;
