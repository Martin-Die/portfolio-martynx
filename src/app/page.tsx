import Head from 'next/head';
import Presentation from '@/pages/presentation';

const Home = () => {
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Bienvenue sur mon portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Presentation />
      </div>
    </>
  );
};

export default Home;