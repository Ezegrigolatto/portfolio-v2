'use client';

import { motion } from 'motion/react';

import LanguageSwitcher from '../language-switcher';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/twMerge';
import MobileNav from '../mobile-nav';
import { FolderKanban, Home, UserRound } from 'lucide-react';
import Navbar from '../navbar';
import { ThemeToggle } from '../theme-toggle';
import Image from 'next/image';

export const HEADER_LINKS = [
  {
    key: 'home',
    href: '/',
    icon: <Home className="h-4 w-4" />,
  },
  {
    key: 'projects',
    href: '/projects',
    icon: <FolderKanban className="h-4 w-4" />,
  },
  {
    key: 'about-me',
    href: '/about-me',
    icon: <UserRound className="h-4 w-4" />,
  },
];

const Header = () => {
  const t = useTranslations();

  return (
    <motion.header
      className={cn(
        'bg-[darkgray]/25 dark:bg-[darkgray]/50 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors'
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Link
        href="/"
        className="flex items-center justify-center gap-1"
        aria-label={t('Header.home')}
      >
        <Image
          src={"/images/avatar/my-avatar.png"}
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </Link>
      <div className="flex items-center gap-2">
        <Navbar />
        <ThemeToggle />
        <LanguageSwitcher />
        <MobileNav />
      </div>
    </motion.header>
  );
};

export default Header;
