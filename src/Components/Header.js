import React from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from './logo-portfolio.png';

function Header() {
    const location = useLocation();

    const navItems = [
        { icon: <FaHome />, text: 'Home', path: '/' },
        { icon: <FaUser />, text: 'About', path: '/about-me' },
        { icon: <FaFolderOpen />, text: 'Projects', path: '/projects' },
        { icon: <FaEnvelope />, text: 'Contact', path: '/contact' }
    ];

    const socials = [
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammadhuzaifahswe/" },
        { icon: <FaGithub />, link: "https://github.com/mhuzaifah" }
    ];

    return (
        <div className="header">
            <div className="headerLogo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navBar">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`navBarItem ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="text">{item.text}</span>
                    </Link>
                ))}
            </div>
            <div style={{ width: "15%", display: 'flex', justifyContent: 'space-evenly' }}>
                {socials.map((item, index) => (
                    <a key={index} target="_blank" rel="noreferrer" href={item.link} style={{ color: "black" }}>
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Header;