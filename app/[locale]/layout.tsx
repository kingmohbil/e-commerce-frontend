import '@/styles/globals.css';
import { Metadata } from 'next';
import clsx from 'clsx';

import LayoutNavbar from './layout-components/Navbar';

import { NextUIProvider, TranslationsProvider } from '@/components';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const navbarWidth = 64;

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout = async ({ children, params }: LayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body className={clsx('bg-background font-inter')}>
        <TranslationsProvider {...params}>
          <NextUIProvider themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
            <div className="min-h-svh flex flex-col bg-[#f7f5f2] dark:bg-black">
              {<LayoutNavbar {...params} />}
              {children}
            </div>
          </NextUIProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
