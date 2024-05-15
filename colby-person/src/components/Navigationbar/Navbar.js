import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure the CSS file is correctly linked

function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={scroll ? "navbar navbar-scroll" : "navbar"}>
            <div className="navbar-container">
                 <div className="navbar-brand">
                 <Link to="/">
                    <img src="signature.png" alt="Logo" className="logo" />
                </Link>
                 </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
                    <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
                    <li><Link to="/bio" onClick={toggleMenu}>Bio</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;