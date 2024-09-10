import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarProps, NavbarContent, Button, NavbarBrand } from '@nextui-org/react';

import NavbarItems from './NavbarItems';
import CategoriesMenu from './CategoriesMenu';
import AuthUserMenu from './AuthUserMenu';
import PublicUserMenu from './PublicUserMenu';
import SearchModalButton from './SearchModalButton';

import { AmazonLogo } from '@/components';
import { siteConfig } from '@/config/site';
import { getSession } from '@/utils/server';
import paths from '@/config/paths.json';
import { Category } from '@/helpers';
import text from '@/config/languages/en/layout.json';

export interface LayoutNavbarProps extends NavbarProps {}

const GetCategoriesMenu: any = async () => {
  try {
    const categories = await new Category().getAll();

    return (
      <CategoriesMenu
        backdrop="blur"
        categories={categories.categories}
        triggerComponent={
          <Button className="text-sm" variant="light">
            {text.links.categories}
          </Button>
        }
      />
    );
  } catch (error) {
    return <CategoriesMenu categories={[]} />;
  }
};

const LayoutNavbar = async ({}: LayoutNavbarProps) => {
  const user = await getSession();

  return (
    <Navbar
      isBordered
      className="bg-white dark:bg-black justify-between"
      classNames={{ wrapper: 'min-w-full max-w-full' }}
    >
      <NavbarBrand className="gap-2">
        <AmazonLogo className="fill-black dark:fill-white" />
        <Link className="text-xl font-semibold capitalize hidden sm:flex" href={paths.home}>
          {siteConfig.name}
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <ul className="flex gap-2 items-center">
          <SearchModalButton />
          <NavbarItems />
          <GetCategoriesMenu />
        </ul>

        {user ? <AuthUserMenu /> : <PublicUserMenu />}
      </NavbarContent>
    </Navbar>
  );
};

export default LayoutNavbar;
