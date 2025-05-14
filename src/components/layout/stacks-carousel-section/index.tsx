'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import { useTranslations } from 'next-intl';
import InfiniteCarousel from '@/components/infinite-carousel';
import { DATA } from './stacks-data';
import CarouselItem from '@/components/infinite-carousel/carousel-item';

const StacksCarouselSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
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
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      className="my-12 w-full overflow-hidden relative"
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
        {t('HomePage.stacks.title')}
      </motion.h2>
      <div className="mt-12">
        <InfiniteCarousel
          gap="16px"
          elements={DATA.filter((_, index) => index <= DATA.length / 2).map((item) => (
            <CarouselItem key={item.label} item={item} />
          ))}
        />
      </div>
      <motion.div
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={variants}
        ref={sectionRef}
        transition={{
          duration: 0.5,
        }}
        className="w-full mt-12 overflow-hidden relative"
      >
        <InfiniteCarousel
          gap="16px"
          elements={DATA.filter((_, index) => index > DATA.length / 2).map((item) => (
            <CarouselItem key={item.label} item={item} />
          ))}
          reverse
        />
      </motion.div>
    </motion.section>
  );
};

export default StacksCarouselSection;
