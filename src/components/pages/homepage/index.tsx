'use client';

import Hero from '@/components/hero';
import HighlightedProject from '@/components/highlighted-project';
import ContactMeSection from '@/components/layout/contact-section';
import HighlightedProjectsSection from '@/components/layout/highlighted-projects-section';
import KpisSection from '@/components/layout/kpis-section';
import StacksCarouselSection from '@/components/layout/stacks-carousel-section';
import { Project } from '@/types';
import React from 'react';

export default function HomePageComponent() {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data.json');

        setProjects(await response.json());
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full justify-center">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <section className="w-full md:py-12 lg:py-24">
          <Hero />
        </section>
        <HighlightedProjectsSection projects={projects.filter((_, index) => index < 2)} />
        <StacksCarouselSection />
        <KpisSection />
        <ContactMeSection />
      </main>
    </div>
  );
}
