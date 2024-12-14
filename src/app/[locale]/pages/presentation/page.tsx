'use client'

import Image from 'next/image';
import { useState } from "react";
import { useTranslations } from 'next-intl';

const Presentation = () => {

    const t = useTranslations('HomePage');
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
                <h1>{t('title')}</h1>
                <p>{t('description')}</p>
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