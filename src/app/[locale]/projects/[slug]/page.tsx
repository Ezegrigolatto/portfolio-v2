import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import AboutMePageComponent from '@/components/pages/about-me';
import ProjectDetails from '@/components/pages/project-detail';

export default function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = use(params);
  setRequestLocale(locale);

  return (
    <main className="max-w-[90%] md:max-w-[70vw] mx-auto flex flex-col items-center justify-center py-40">
      <ProjectDetails slug={slug} />
    </main>
  );
}
