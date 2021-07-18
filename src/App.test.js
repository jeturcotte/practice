import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('has boobs', () => {
  render(<App />);
  const hElement = screen.getByText(/boobs/i);
  expect(hElement).toBeInTheDocument();
});

