'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import { useTranslations } from 'next-intl';
import { ClockIcon, FolderKanban, Smile } from 'lucide-react';
import Kpi from '@/components/kpi';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const KPIS = [
  {
    label: 'HomePage.kpis.projects',
    value: '10+',
    icon: <FolderKanban className="h-6 w-6" />,
    animation: (
      <DotLottieReact
        className="absolute right-0 bottom-2 w-56 translate-x-10"
        src="https://lottie.host/4c7aab94-a047-4f96-b41c-4fd362ce7f14/9fNr5bbPew.lottie"
        loop
        autoplay
      />
    ),
  },
  {
    label: 'HomePage.kpis.happy-customers',
    value: '6+',
    icon: <Smile className="h-6 w-6" />,
    animation: (
      <DotLottieReact
        className="absolute right-0 bottom-2 w-56 translate-x-10"
        src="https://lottie.host/e2d463b0-9edb-4ff8-b903-c0ec5464679c/iiekzkHc1I.lottie"
        loop
        autoplay
      />
    ),
  },
  {
    label: 'HomePage.kpis.coding-hours',
    value: '5000+',
    icon: <ClockIcon className="h-6 w-6" />,
    animation: (
      <DotLottieReact
        className="absolute right-0 bottom-2 w-56 translate-x-10"
        src="https://lottie.host/e4423136-651d-4e4d-831c-f481afa8bcf2/Qo3jW0zTqJ.lottie"
        loop
        autoplay
      />
    ),
  },
];

const KpisSection: React.FC = () => {
  const kpisRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(kpisRef, { once: true, margin: '-100px' });
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
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={kpisRef}
      transition={{
        duration: 0.5,
      }}
      className="my-12 lg:my-24 max-w-[70vw]"
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
        {t('HomePage.kpis.title')}
      </motion.h2>
      <motion.div
        className="mt-12 flex gap-8 flex-wrap justify-center"
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
        {KPIS.map((kpi) => (
          <Kpi key={kpi.label} data={kpi} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default KpisSection;
