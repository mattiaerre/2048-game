import getNext from '../core/getNext';

function reducer(state, action) {
  try {
    return getNext(state, action.type);
  } catch (error) {
    console.log('state:', JSON.stringify(state));
    throw error; // INFO: not very redux-y
  }
}

export default reducer;
