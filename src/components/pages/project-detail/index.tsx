'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Project } from '@/types';
import { AnimatePresence, motion } from 'motion/react';
import React, { useMemo } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import { buttonVariants } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface ProjectDetailsProps {
  slug: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ slug }) => {
  const [projects, setProjects] = React.useState<Project[]>();
  const t = useTranslations();

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await (await fetch('/data.json')).json();

        console.log('Projects:', response);

        console.log('Slug:', slug);

        setProjects(response);
      } catch (error) {
        console.error('Error fetching projects:', error);
        return notFound();
      }
    };
    fetchProjects();
  }, [slug]);

  const project = useMemo(() => {
    return projects?.find((project) => project.slug === slug);
  }, [projects, slug]);

  return (
    <AnimatePresence key={slug}>
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        exit={{ y: 80 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col layout items-start md:w-[50vw] min-h-screen h-full p-4 relative"
      >
        <div className="py-8">
          <h3 className="text-2xl font-bold">{project?.title}</h3>
          <p className="mt-4 text-gray-500">{project?.description}</p>
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
            }),
          ]}
        >
          <CarouselContent>
            {project?.images.map((image, index) => (
              <CarouselItem className="flex items-center justify-center" key={index}>
                <Image
                  src={image.url || ''}
                  width="1000"
                  height="1000"
                  alt={project?.title || ''}
                  className="w-full rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex w-full py-8 justify-between items-center">
          <motion.div className="flex gap-2 flex-wrap">
            {project?.technologies.map((tech, index) => (
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                key={index}
                className="text-xs md:text-sm text-gray-500 bg-zinc-800/20 dark:bg-zinc-200 dark:text-gray-900 px-2 py-1 rounded-full w-max"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          {project?.start_date && project?.end_date && (
            <p className=" text-gray-500">
              {project?.start_date} - {project?.end_date}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-gray-500">{project?.full_description}</p>
          <p className="text-gray-500">{project?.long_role_explanation}</p>
        </div>
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
          {t('ProjectDetailPage.cta-button')}
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetails;
