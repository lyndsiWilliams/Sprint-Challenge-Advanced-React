import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Dark mode button renders to the DOM', () => {
  const { getByText } = render(<App />);
  let darkButton = getByText(/dark/i);

  expect(darkButton).toBeInTheDocument();
});

test('Dark mode changes the document.body class name', () => {
  const { getByTestId } = render(<App />);
  let darkButton = getByTestId('drk-btn');

  fireEvent.click(darkButton);
  expect(document.body).toHaveClass('dark-mode');
})