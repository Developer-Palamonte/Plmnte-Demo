import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders homepage heading', () => {
  render(<App />);
  const heading = screen.getByText(/Homepage of Palamonte/i);
  expect(heading).toBeDefined();
});
