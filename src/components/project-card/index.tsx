import { Project } from '@/types';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <AnimatePresence>
      <Link href={`/projects/${data.slug}`} >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-start w-full md:w-[50vw] min-h-64 h-full p-4 rounded-lg shadow-lg dark:shadow-zinc-800 border relative cursor-pointer"
        >
          <img
            src={data.images[0].url}
            alt={data.title}
            className="hidden md:block min-h-64 h-full w-46 object-cover rounded-lg -translate-x-16 border shadow-2xl dark:shadow-zinc-800 "
          />
          <div className="flex flex-col w-full">
            <div className="py-4">
              <h3 className="text-xl font-semibold">{data.title}</h3>
              <p className="mt-2 text-gray-600">{data.description}</p>
            </div>
            <motion.div className="flex gap-2 flex-wrap">
              {data.technologies.map((tech, index) => (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  key={index}
                  className="text-xs md:text-sm text-gray-500 bg-zinc-800/20 dark:bg-zinc-200 dark:text-gray-900 px-2 py-1 rounded-full w-max"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <div className="z-10 font-bold flex items-center justify-end mt-6 gap-2 ">
              <p>See more</p>
              <ArrowRight className="ml-1" size={16} />
            </div>
          </div>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};

export default ProjectCard;
