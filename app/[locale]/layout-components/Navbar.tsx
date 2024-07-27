import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarProps, NavbarContent, Button, NavbarBrand } from '@nextui-org/react';

import NavbarItems from './NavbarItems';
import CategoriesMenu from './CategoriesMenu';
import AuthUserMenu from './AuthUserMenu';
import PublicUserMenu from './PublicUserMenu';

import { AmazonLogo, TranslationsProvider } from '@/components';
import { siteConfig } from '@/config/site';
import { request, getSession } from '@/utils';

export interface LayoutNavbarProps extends NavbarProps {
  locale: string;
}

const GetCategoriesMenu: any = async () => {
  try {
    const { data } = await request.get<{ count: number; categories: CategoryType[] }>(
      '/category?active=true'
    );

    return (
      <CategoriesMenu
        backdrop="blur"
        categories={data.categories}
        triggerComponent={
          <Button className="text-sm" variant="light">
            Categories
          </Button>
        }
      />
    );
  } catch (error) {
    return <CategoriesMenu categories={[]} />;
  }
};

const LayoutNavbar = async ({ locale }: LayoutNavbarProps) => {
  const user = await getSession();

  return (
    <Navbar
      isBordered
      className="bg-white dark:bg-black justify-between"
      classNames={{ wrapper: 'min-w-full' }}
    >
      <NavbarBrand className="gap-2">
        <AmazonLogo className="fill-black dark:fill-white" />
        <Link className="text-xl font-semibold capitalize" href="/home">
          {siteConfig.name}
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <ul className="flex gap-2 items-center">
          <NavbarItems />
          <GetCategoriesMenu />
        </ul>

        <TranslationsProvider locale={locale} namespaces={['nav']}>
          {user ? <AuthUserMenu /> : <PublicUserMenu />}
        </TranslationsProvider>
      </NavbarContent>
    </Navbar>
  );
};

export default LayoutNavbar;
