import {render, screen} from '@testing-library/react';
import Seller from './../components/routes/Seller';

test('renders react component', () => {

    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedUsedNavigate,
    }));
  
    render(<Seller />);

    const divElement = screen.getByText(/Leverandører/i);
    expect(divElement).toBeInTheDocument();
});