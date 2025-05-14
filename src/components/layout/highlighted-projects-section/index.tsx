'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import HighlightedProject from '@/components/highlighted-project';
import { useTranslations } from 'next-intl';
import { Project } from '@/types';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import { buttonVariants } from '@/components/ui/button';

interface HighlightedProjectsSectionProps {
  projects: Project[];
}

const HighlightedProjectsSection: React.FC<HighlightedProjectsSectionProps> = ({
  projects,
}) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' });
  const t = useTranslations();

  const variants = {
    initial: {
      y: 80,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
    ref={projectsRef}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      transition={{
        duration: 0.5,
      }}
      className="my-12  max-w-[70vw]"
    >
      <motion.h2
        className="text-center text-3xl font-semibold"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {t('HomePage.projects.title')}
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {projects.map((project) => (
          <HighlightedProject key={project.id} project={project} />
        ))}
      </motion.div>
      <div className="my-8 flex items-center justify-center">
        <Link
          href="/projects"
          className={cn(
            buttonVariants({
              variant: 'outline',
            }),
            'rounded-xl'
          )}
        >
        {t('HomePage.projects.cta-button')}
        </Link>
      </div>
    </motion.section>
  );
};

export default HighlightedProjectsSection;
