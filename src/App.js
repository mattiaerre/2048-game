import React, { useEffect, useReducer } from 'react';
import { DOWN, LEFT, RIGHT, UP } from './core/getNext';
import initialState from './core/initialState';
import reducer from './core/reducer';
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
      <h1>2048</h1>
      <table className="App__table">
        <tbody>
          {state.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cell, index) => (
                  <td className={`tile${cell}`} key={index}>
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
}

export default App;
