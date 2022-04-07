import {render, screen} from '@testing-library/react';
import Farmer from './../components/routes/Farmer';

test('renders react component', () => {

    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedUsedNavigate,
    }));
  
    render(<Farmer />);

    const divElement = screen.getByText(/Farmers/i);
    expect(divElement).toBeInTheDocument();
});