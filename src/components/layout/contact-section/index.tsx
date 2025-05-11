'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

import HighlightedProject from '@/components/highlighted-project';
import { useTranslations } from 'next-intl';
import { Project } from '@/types';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';
import { buttonVariants } from '@/components/ui/button';
import ContactForm from '@/components/contact-form';

const ContactMeSection: React.FC = () => {
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
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={sectionRef}
      transition={{
        duration: 0.5,
      }}
      className="my-12 lg:my-24 max-w-[70vw]"
    >
      <motion.div
        className="mt-12 flex"
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
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default ContactMeSection;
