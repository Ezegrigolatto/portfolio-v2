'use client';

import { MenuIcon } from 'lucide-react';

import { useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HEADER_LINKS } from '../header';

const MobileNav = () => {
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex size-9 items-center justify-center p-0 md:hidden"
          aria-label={t('Header.toggle-menu')}
          variant="ghost"
        >
          <MenuIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={20} className="min-w-40">
        {HEADER_LINKS.map((link) => (
          <DropdownMenuItem key={link.key} asChild>
            <Link href={link.href} className="flex items-center gap-4">
              {link.icon}
              <div>{ t(`Header.${link.key}`)}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
