import '@/styles/globals.css';
import { Metadata } from 'next';
import clsx from 'clsx';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

import LayoutNavbar from './layout-components/Navbar';

import { NextUIProvider, ReduxProvider, CartModal } from '@/components';
import { siteConfig } from '@/config/site';
import text from '@/config/languages/en/text.json';

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
}

const RootLayout = async ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body className={clsx('bg-background font-inter', inter.className)}>
        <NextUIProvider themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <ReduxProvider>
            <div className="min-h-svh flex flex-col bg-[#f7f5f2] dark:bg-black">
              {<LayoutNavbar />}
              {children}
            </div>
            <CartModal
              modalTitle={text.modals.cart.title}
              submitTitle={text.modals.cart.submitTitle}
            />
          </ReduxProvider>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
