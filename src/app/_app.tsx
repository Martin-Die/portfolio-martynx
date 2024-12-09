import './app/globals.scss'; // Importer le fichier SCSS global

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;