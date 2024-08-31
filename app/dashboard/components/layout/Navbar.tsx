'use client';
import React, { FC } from 'react';
import { Navbar, NavbarProps, NavbarContent } from '@nextui-org/react';
import { FaStore } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

import DashboardLink from './DashboardLink';

import AuthUserMenu from '@/app/layout-components/AuthUserMenu';
import { AmazonLogo } from '@/components';
import { siteConfig } from '@/config/site';
import text from '@/config/languages/en/text.json';

export interface LayoutNavbarProps extends NavbarProps {}

const LayoutNavbar: FC<LayoutNavbarProps> = async ({}) => {
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      className="bg-white dark:bg-black justify-between"
      classNames={{ wrapper: 'min-w-full' }}
    >
      <NavbarContent justify="start">
        <DashboardLink
          href="/"
          icon={<AmazonLogo className="fill-black dark:fill-white" height={20} width={20} />}
        >
          {siteConfig.name}
        </DashboardLink>
        <DashboardLink
          active={pathname.includes(text.nav.dashboardLinks.store)}
          href="dashboard/store"
          icon={<FaStore size={20} />}
        >
          {text.nav.dashboardLinks.store}
        </DashboardLink>
      </NavbarContent>

      <NavbarContent justify="end">
        <AuthUserMenu />
      </NavbarContent>
    </Navbar>
  );
};

export default LayoutNavbar;
