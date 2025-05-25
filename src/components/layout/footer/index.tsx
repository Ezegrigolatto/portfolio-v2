'use client';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();
  return (
    <AnimatePresence>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#343434] text-white px-6 md:px-20 py-8 mt-24 lg:mt-48"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-sm font-light">
              {t('Footer.text1')} <span className="text-red-400">❤</span>
            </p>
            <p className="text-xs font-extralight tracking-wide uppercase">
              {t('Footer.copyright')} {new Date().getFullYear()} - {t('Footer.rights')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-sm whitespace-nowrap font-medium">{t('Footer.text2')}</p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Ezegrigolatto"
                aria-label="GitHub"
                className="transform hover:scale-110 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={24} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/ezequiel-grigolatto/"
                aria-label="LinkedIn"
                className="transform hover:scale-110 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
