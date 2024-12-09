import Presentation from '@/pages/presentation';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export function CatchAllPage() {
  notFound();
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const Home = () => {
  return (
    <div>
      <Presentation />
    </div>
  );
};

export default Home;