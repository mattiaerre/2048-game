import React, { useEffect, useReducer } from 'react';
import { version } from '../package.json';
import { DOWN, LEFT, NEW_GAME, RIGHT, UP } from './core/constants';
import initialState from './store/initialState';
import reducer from './store/reducer';
import './App.css';
import useKeyPress from './useKeyPress';

function App() {
  const downPress = useKeyPress(40);
  const leftPress = useKeyPress(37);
  const rightPress = useKeyPress(39);
  const upPress = useKeyPress(38);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (downPress) {
      dispatch({ type: DOWN });
    }
    if (leftPress) {
      dispatch({ type: LEFT });
    }
    if (rightPress) {
      dispatch({ type: RIGHT });
    }
    if (upPress) {
      dispatch({ type: UP });
    }
  }, [downPress, leftPress, rightPress, upPress]);

  return (
    <article className="App">
      <h1 className="App__h1">
        <a
          href="https://2048game.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          2048
        </a>
      </h1>
      <p>
        <button
          className="App__button"
          onClick={() => dispatch({ type: NEW_GAME })}
        >
          New game
        </button>
      </p>
      <table className="App__table">
        <tbody>
          {state.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cell, index) => (
                  <td className={`tile--${cell}`} key={index}>
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="App__p">
        How to play: use your arrow keys to move the tiles. When two tiles with
        the same number touch, they merge into one.
      </p>
      <footer className="App__footer">
        <small>v{version}</small>
      </footer>
    </article>
  );
}

export default App;
