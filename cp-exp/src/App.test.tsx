import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/ResizableContainer', () => () => (
  <main>CP-Explainer</main>
));

test('renders the CP-Explainer application container', () => {
  render(<App />);
  expect(screen.getByText('CP-Explainer')).toBeInTheDocument();
});
