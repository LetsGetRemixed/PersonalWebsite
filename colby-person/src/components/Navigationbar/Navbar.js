import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure the CSS file is correctly linked

function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scroll ? "navbar navbar-scroll" : "navbar"}>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/bio">Bio</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;