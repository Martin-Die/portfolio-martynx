'use client'

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {

    // États pour chaque lien
    const [isLinkHovered, setIsLinkHovered] = useState(false);

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
        <footer style={{ padding: '10px 0', background: '#333', color: 'white', textAlign: 'center' }}>
            <p>&copy; 2024 MonSite. Tous droits réservés.</p>
            <p>
                <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    style={linkStyle(isLinkHovered)}
                    onMouseEnter={() => setIsLinkHovered(true)}
                    onMouseLeave={() => setIsLinkHovered(false)}
                >
                    Instagram
                </Link>
            </p>
        </footer>
    );
}

export default Footer;
