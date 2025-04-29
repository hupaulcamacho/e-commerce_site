import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
    it('should render the Navbar component', () => {
        render(<Navbar />);
        const navbarElement = screen.getByRole('navigation');
        expect(navbarElement).toBeInTheDocument();
    });

    it('should click the Sign Up button', () => {
        const mockSignUp = jest.fn();
        render(<Navbar />);
        const signUpButton = screen.getByText('Sign Up');
        signUpButton.onclick = mockSignUp;
        signUpButton.click();
        expect(mockSignUp).toHaveBeenCalled();
    });

    it('should render the Reverb logo', () => {
        render(<Navbar />);
        const logoElement = screen.getByText('Reverb');
        expect(logoElement).toBeInTheDocument();
    });

    it('should render the search input', () => {
        render(<Navbar />);
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
    });
    
    it('should click the Log In button', () => {
        const mockLogIn = jest.fn();
        render(<Navbar />);
        const logInButton = screen.getByText('Log In');
        logInButton.onclick = mockLogIn;
        logInButton.click();
        expect(mockLogIn).toHaveBeenCalled();
    });
});