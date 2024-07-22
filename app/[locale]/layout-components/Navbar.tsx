import React, { FC } from 'react';
import Link from 'next/link';
import { Navbar, NavbarProps, NavbarContent, Button, NavbarBrand } from '@nextui-org/react';

import NavbarItems from './NavbarItems';
import CategoriesMenu from './CategoriesMenu';
import AuthUserMenu from './AuthUserMenu';

import { AmazonLogo, TranslationsProvider } from '@/components';
import { siteConfig } from '@/config/site';
import initTranslations from '@/i18next';
import { request, getSession } from '@/utils';

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

const LayoutNavbar: FC<LayoutNavbarProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['common']);
  const user = getSession();

  return (
    <Navbar
      className="bg-white dark:bg-black justify-between"
      classNames={{ wrapper: 'min-w-full' }}
    >
      <NavbarBrand className="gap-2">
        <AmazonLogo className="fill-black dark:fill-white" />
        <Link className="text-xl font-semibold capitalize" href="/">
          {siteConfig.name}
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <ul className="flex gap-2 items-center">
          <NavbarItems />
          <GetCategoriesMenu />
        </ul>

        <TranslationsProvider locale={locale} namespaces={['nav']}>
          {user ? (
            <AuthUserMenu />
          ) : (
            <Button radius="full" variant="shadow">
              {t('button.login')}
            </Button>
          )}
        </TranslationsProvider>
      </NavbarContent>
    </Navbar>
  );
};

export default LayoutNavbar;
