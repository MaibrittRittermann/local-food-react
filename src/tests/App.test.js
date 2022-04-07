import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders react component', () => {

    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedUsedNavigate,
    }));
  
    render(<App />);

    const divElement = screen.getByText(/Local Food/i);
    expect(divElement).toBeInTheDocument();
});