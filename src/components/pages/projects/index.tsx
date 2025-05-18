'use client';

import ProjectCard from '@/components/project-card';
import { Project } from '@/types';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function ProjectsPageComponent() {
  const t = useTranslations();
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
      <main className="flex-1 w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-typography text-4xl my-4 font-bold">
          {t('ProjectsPage.title')}
        </h1>
        {projects.length > 0 &&
          projects.map((project) => <ProjectCard key={project.id} data={project} />)}
      </main>
    </div>
  );
}
