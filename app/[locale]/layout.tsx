import '@/styles/globals.css';
import { Metadata } from 'next';
import clsx from 'clsx';

import LayoutNavbar from './layout-components/Navbar';
import CategoriesMenuProps from './layout-components/CategoriesMenu';

import { NextUIProvider } from '@/components';
import { siteConfig } from '@/config/site';
import { fontPoppins } from '@/config/fonts';
import initTranslations from '@/i18next';

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
  const { t } = await initTranslations(params.locale, ['common']);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx('bg-background font-poppins antialiased', fontPoppins.variable)}
        style={{
          background:
            'linear-gradient(to right top, #090c0f, #070a0d, #06080b, #040508, #020306, #06070c, #090b10, #0d0e14, #13151c, #161c24, #19222d, #1b2935)',
        }}
      >
        <NextUIProvider themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="min-h-screen flex flex-col">
            <LayoutNavbar {...params} />
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
