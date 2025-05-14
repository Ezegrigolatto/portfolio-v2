'use client';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';

import { AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();
  return (
    <AnimatePresence>
      <footer className="w-full h-40 bg-foreground text-background flex items-end justify-between px-8 md:px-20 py-10 mt-24 lg:mt-48">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="text-sm">
            {t('Footer.text1')} <span className="text-red-500">❤</span>
          </p>
          <p className="text-sm">
            {t('Footer.copyright')} {new Date().getFullYear()} - {t('Footer.rights')}
          </p>
        </div>
        <div className="flex flex-col items-end justify-center gap-2">
          <p className="text-sm">{t('Footer.text2')}</p>
          <div className="flex gap-4">
            <Link href="https://github.com/Ezegrigolatto">
              <SiGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/ezequiel-grigolatto/">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </footer>
    </AnimatePresence>
  );
};

export default Footer;
