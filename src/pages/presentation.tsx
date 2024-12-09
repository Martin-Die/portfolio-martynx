'use client'

import Image from 'next/image';
import { useState } from "react";

const Presentation = () => {

    const [hovered, setHovered] = useState(false);

    return (
        <div className="container">
            <Image
                src='/images/niku.png'
                className="presentation-img"
                width={300} height={300}
                alt="niku"
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="hero-text">
                <h1>Bonjour, je suis MartYnX</h1>
                <p>
                    Je suis un développeur furry français. Je me spécialise dans la créations d'outils basé sur l'IA et bien plus.
                </p>
                <div className="social-icons">
                    <a href="https://x.com/DieMartin" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://fontawesome.com/icons"
                        aria-label="Icon folder"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <i className={hovered ? "fa-solid fa-folder-open" : "fa-solid fa-folder"}></i>
                    </a>
                    <a href="https://github.com/MartYnX" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://bsky.app/profile/martynx.bsky.social" aria-label="bLUESKY" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-bluesky"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Presentation;