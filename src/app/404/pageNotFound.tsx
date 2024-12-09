'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import './pageNotFound.scss';

const PageNotFound = () => {

  const router = useRouter();
  const handleGoBack = () => {
    router.back(); // Retour à la page précédente dans l'historique
  };

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <img
        src="/images/shadu.png"
        alt="Image not found"
        style={{ width: '250px', marginBottom: '30px' }}
      />
      <p>This website is still WIP</p>
      <a onClick={handleGoBack}>You should go back</a>
    </div>
  );
};

export default PageNotFound;
