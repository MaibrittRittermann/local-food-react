import {render, screen} from '@testing-library/react';
import App from './App';

test('renders react component', () => {
  render(<App />);
  const divElement = screen.getByText(/Local Food/i);
  expect(divElement).toBeInTheDocument();
});