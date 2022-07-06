import React from 'react';
import peliLogo from '././peliLogo.jpg';

const Header = () => {
    return (
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img className="rounded-circle" src={peliLogo} alt="" width="40" height="40"></img>
                    Mi buscador de pelis
                </a>
            </div>
        </nav>
    );
}

export default Header;