'use client'

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    // États pour chaque lien
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isAccueilHovered, setIsAccueilHovered] = useState(false);
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);

    // Styles de base
    const baseStyle = {
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    };

    // Styles avec hover
    const linkStyle = (hovered: boolean) => ({
        ...baseStyle,
        color: hovered ? '#ffcc00' : 'white',  // Change la couleur lors du survol
    });

    return (
        <header style={{ padding: '10px', background: '#333333' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>
                    <Link
                        href="/"
                        style={linkStyle(isHomeHovered)}
                        onMouseEnter={() => setIsHomeHovered(true)}
                        onMouseLeave={() => setIsHomeHovered(false)}
                    >
                        MonSite
                    </Link>
                </h1>
                <nav>
                    <ul style={{ display: 'flex', listStyle: 'none' }}>
                        <li style={{ margin: '0 15px' }}>
                            <Link
                                href="/"
                                style={linkStyle(isAccueilHovered)}
                                onMouseEnter={() => setIsAccueilHovered(true)}
                                onMouseLeave={() => setIsAccueilHovered(false)}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li style={{ margin: '0 15px' }}>
                            <Link
                                href="/about"
                                style={linkStyle(isAboutHovered)}
                                onMouseEnter={() => setIsAboutHovered(true)}
                                onMouseLeave={() => setIsAboutHovered(false)}
                            >
                                À propos
                            </Link>
                        </li>
                        <li style={{ margin: '0 15px' }}>
                            <Link
                                href="/contact"
                                style={linkStyle(isContactHovered)}
                                onMouseEnter={() => setIsContactHovered(true)}
                                onMouseLeave={() => setIsContactHovered(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
