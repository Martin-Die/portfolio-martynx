'use client'

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
    const router = useRouter();
    const t = useTranslations('LanguageSwitcher');
    const [selectedLanguage, setSelectedLanguage] = useState('fr');

    useEffect(() => {
        // Récupérer la langue actuelle à partir de l'URL
        const currentLocale = window.location.pathname.split('/')[1];
        if (currentLocale && ['fr', 'en'].includes(currentLocale)) {
            setSelectedLanguage(currentLocale);
        }
    }, []);

    const changeLanguage = (locale: string) => {
        setSelectedLanguage(locale);
        router.push(`/${locale}`);
    };

    return (
        <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{ background: '#333', color: 'white', border: 'none', borderRadius: '4px' }}
        >
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
    );
};

export default LanguageSwitcher;