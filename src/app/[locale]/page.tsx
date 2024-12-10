import Presentation from '@/pages/presentation';
import { routing } from '@/i18n/routing';
import Header from '@/components/header';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
    </div>
  );
};

export default Home;