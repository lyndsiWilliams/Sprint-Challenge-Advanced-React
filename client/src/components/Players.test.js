import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import { Players } from './Players';
import { PlayerCard } from './PlayerCard';

// test('Players test', () => {
//   const { getAllByText } = render(<Players />);
//   const playersNameCheck = getAllByText(/name/i);
//   expect(playersNameCheck).toHaveLength(101);
// });