'use client';
import React, { FC } from 'react';
import { Navbar, NavbarProps, NavbarContent } from '@nextui-org/react';
import { FaStore } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import DashboardLink from './DashboardLink';

import AuthUserMenu from '@/app/[locale]/layout-components/AuthUserMenu';
import { AmazonLogo } from '@/components';
import { siteConfig } from '@/config/site';

export interface LayoutNavbarProps extends NavbarProps {
  locale: string;
}

const LayoutNavbar: FC<LayoutNavbarProps> = async ({}) => {
  const pathname = usePathname();
  const { t } = useTranslation();

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
          active={pathname.includes(t('dashboardLinks.store'))}
          href="dashboard/store"
          icon={<FaStore size={20} />}
        >
          {t('dashboardLinks.store')}
        </DashboardLink>
      </NavbarContent>

      <NavbarContent justify="end">
        <AuthUserMenu />
      </NavbarContent>
    </Navbar>
  );
};

export default LayoutNavbar;
