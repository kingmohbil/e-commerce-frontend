import React, { FC } from 'react';
import Link from 'next/link';
import { Navbar, NavbarProps, NavbarContent, Button } from '@nextui-org/react';

import NavbarItems from './NavbarItems';
import CategoriesMenu from './CategoriesMenu';

import { AmazonLogo } from '@/components';
import { siteConfig } from '@/config/site';
import initTranslations from '@/i18next';
import { request } from '@/utils';

export interface LayoutNavbarProps extends NavbarProps {
  locale: string;
}

const GetCategoriesMenu = async () => {
  try {
    const { data } = await request.get<{ count: number; categories: CategoryType[] }>(
      '/category?active=true'
    );

    return (
      <CategoriesMenu
        backdrop="blur"
        categories={data.categories}
        triggerComponent={
          <Button className="text-md" variant="light">
            Categories
          </Button>
        }
      />
    );
  } catch (error) {
    return <CategoriesMenu categories={[]} />;
  }
};

const LayoutNavbar: FC<LayoutNavbarProps> = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['common']);

  return (
    <Navbar className="bg-white dark:bg-black">
      <NavbarContent className="gap-16" justify="start">
        <div className="flex items-center gap-8">
          <Link href="/">
            <AmazonLogo className="fill-black dark:fill-white" />
          </Link>
          <p className="text-xl font-semibold capitalize">{siteConfig.name}</p>
        </div>
        <ul className="flex gap-4 items-center">
          <NavbarItems />
          <GetCategoriesMenu />
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button radius="full" variant="shadow">
          {t('button.login')}
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default LayoutNavbar;
