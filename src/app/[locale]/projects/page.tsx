import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import ProjectsPageComponent from '@/components/pages/projects';

export default function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="max-w-[90%] md:max-w-[70vw] mx-auto flex flex-col items-center justify-center py-40">
      <ProjectsPageComponent />
    </main>
  );
}
