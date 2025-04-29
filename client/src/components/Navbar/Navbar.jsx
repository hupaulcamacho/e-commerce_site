import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
            <a href="/" className="logo">
                Reverb
            </a>
            </div>
            <div className='navbar-center'>
                <input 
                    type='text'
                    value='' 
                    onChange={() => {}}
                />
            </div>
            <div className='navbar-right'>
                <button onClick={() => {}}>Sign Up</button>
                <button onClick={() => {}}>Log In</button>
            </div>
        </nav>
    )
}