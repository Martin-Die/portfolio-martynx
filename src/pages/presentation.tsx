import Image from 'next/image';

const Presentation = () => {
    return (
        <div className="hero-container">
            <Image src='/images/niku.png' className="profile-img" width={300} height={300} alt="Mon portrait" />
            <div className="hero-text">
                <h1>Bonjour, je suis [Votre Nom] 👋</h1>
                <p>
                    Je suis un développeur basé à [Votre Ville]. Je me spécialise dans la création de sites web et d'applications exceptionnels.
                </p>
                <div className="social-icons">
                    <a href="https://twitter.com/votreprofil" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://github.com/votreprofil" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/votreprofil/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Presentation;