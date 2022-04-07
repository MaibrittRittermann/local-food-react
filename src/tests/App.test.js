import {render, screen} from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('renders react component', () => {

    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedUsedNavigate,
    }));
  
    render(<BrowserRouter><App /></BrowserRouter>);

    const divElement = screen.getByText(/Farmers/i);
    expect(divElement).toBeInTheDocument();
});