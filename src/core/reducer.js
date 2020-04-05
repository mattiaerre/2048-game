import getNext from './getNext';

function reducer(state, action) {
  try {
    return getNext(action.type, state);
  } catch (error) {
    console.log('state:', JSON.stringify(state));
    throw error;
  }
}

export default reducer;
