import React from 'react';
import { render } from '@testing-library/react';
import mockAddRandom from './core/mockAddRandom';
import App from './App';

jest.mock('./core/addRandom', () => (afterMove) => mockAddRandom(afterMove));

test('<App />', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
