'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { HEADER_LINKS } from '../header';
import Link from 'next/link';
import { cn } from '@/utils/twMerge';

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {HEADER_LINKS.map((link) => {
          const isActive =
            pathname.split('/')[2] === link.href.replaceAll('/', '') ||
            (pathname.split('/').length === 2 && link.href === '/');

          return (
            <li
              key={link.key}
              className="relative flex h-max items-center justify-center"
            >
              <Link
                className={cn(
                  'rounded-sm px-3 py-2 text-sm font-medium transition-colors',
                  {
                    'text-foreground/70': !isActive,
                    'text-foreground font-bold': isActive,
                  }
                )}
                href={link.href}
              >
                {t(`Header.${link.key}`)}
              </Link>
              {isActive ? (
                <>
                  <div className="bg-foreground absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2" />
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
