import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import AboutMePageComponent from '@/components/pages/about-me';

export default function AboutMePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="max-w-[90vw] md:max-w-[70vw] mx-auto flex flex-col items-center justify-center py-40">
      <AboutMePageComponent />
    </main>
  );
}
