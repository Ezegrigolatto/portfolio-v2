'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Project } from '@/types';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useMemo, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import { buttonVariants } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import MainLoader from '@/components/mainloader';
interface ProjectDetailsProps {
  slug: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ slug }) => {
  const params = useParams();
  const [projects, setProjects] = useState<Project[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const t = useTranslations();
  const { locale: language } = params as { locale: string };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize); // Check on resize

    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    }; // Cleanup
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        const response = await (await fetch(`/data_${language || 'en'}.json`)).json();

        setProjects(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
        return notFound();
      }
    };
    fetchProjects();
  }, [slug, language]);

  const project = useMemo(() => {
    return projects?.find((project) => project.slug === slug);
  }, [projects, slug]);

  if (isLoading || isMobile === null) {
    return <MainLoader />;
  }

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
          className="md:min-h-[450px]"
        >
          <CarouselContent>
            {project?.images.map((image, index) => (
              <CarouselItem className="flex items-center justify-center" key={index}>
                <Image
                  src={image.url || ''}
                  width="1000"
                  height={isMobile ? "300" : "450"}
                  alt={project?.title || ''}
                  className="w-full rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex w-full py-8 justify-between items-start gap-8">
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
          <p
            className="text-gray-500"
            dangerouslySetInnerHTML={{
              __html: project?.long_role_explanation || '',
            }}
          />
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
