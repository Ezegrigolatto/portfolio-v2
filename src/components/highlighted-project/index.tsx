import { Project } from '@/types';
import { ArrowRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'motion/react';
import React from 'react';
interface HighlightedProjectProps {
  project: Project;
}

const HighlightedProject: React.FC<HighlightedProjectProps> = ({ project }) => {
  const t = useTranslations();
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative rounded-xl p-2 shadow-lg dark:shadow-zinc-800/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        width={1200}
        height={630}
        src={project.images[0].url}
        alt={project.title}
        className="rounded-lg"
      />
      <div className="flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500">
        {`${project.start_date} – ${project.end_date}`}
      </div>

      <motion.div
        animate={{ x: isHovered ? 20 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex gap-2 items-center mr-8"
      >
        <div className="flex flex-col px-2 py-4 w-[85%]">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-muted-foreground mt-2">{project.description}</p>
        </div>
        <ArrowRightIcon size={24} />
      </motion.div>
    </Link>
  );
};
export default HighlightedProject;
