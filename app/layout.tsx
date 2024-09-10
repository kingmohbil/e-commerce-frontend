import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';

import LayoutNavbar from './layout-components/Navbar';
import ProductsModal from './layout-components/ProductsModal';

import paths from '@/config/paths.json';
import { NextUIProvider, ReduxProvider, CartModal, ReduxFlashMessage } from '@/components';
import { siteConfig } from '@/config/site';
import text from '@/config/languages/en/text.json';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

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
            <ProductsModal />
            <CartModal
              modalTitle={text.modals.cart.title}
              submitProps={{ as: Link, href: paths.checkout }}
              submitTitle={text.modals.cart.submitTitle}
            />
            <ReduxFlashMessage />
          </ReduxProvider>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
