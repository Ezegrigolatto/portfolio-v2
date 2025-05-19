'use client';

import Hero from '@/components/hero';
import ContactMeSection from '@/components/layout/contact-section';
import HighlightedProjectsSection from '@/components/layout/highlighted-projects-section';
import KpisSection from '@/components/layout/kpis-section';
import ScrollHint from '@/components/layout/scroll-hint';
import StacksCarouselSection from '@/components/layout/stacks-carousel-section';
import { Project } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';

export default function HomePageComponent() {
  const params = useParams();
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [showScrollHint, setShowScrollHint] = React.useState(true);

  const { locale: language } = params as { locale: string };

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/data_${language || "en"}.json`);

        setProjects(await response.json());
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen w-full justify-center">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <section className="w-full md:mt-24">
          <Hero />
        </section>
        {showScrollHint && (
          <div className="my-12">
            <ScrollHint />
          </div>
        )}
        <HighlightedProjectsSection projects={projects.filter((_, index) => index < 2)} onViewChange={() =>setShowScrollHint(false)} />
        <StacksCarouselSection />
        <KpisSection />
        <ContactMeSection />
      </main>
    </div>
  );
}
