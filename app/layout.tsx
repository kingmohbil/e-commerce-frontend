import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { NavbarItem, Button } from '@nextui-org/react';

import { CustomNavbar, AmazonLogo, NextUIProvider } from '@/components';
import { siteConfig } from '@/config/site';
import { fontPoppins } from '@/config/fonts';

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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

const NavbarItems = () =>
  siteConfig.navItems.map((item) => (
    <NavbarItem key={crypto.randomUUID()}>
      <Link href={item.href}>{item.label}</Link>
    </NavbarItem>
  ));

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <NextUIProvider themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className="min-h-screen flex flex-col">
            <CustomNavbar
              centerItems={<NavbarItems />}
              endItems={
                <Button radius="sm" variant="shadow">
                  Login
                </Button>
              }
              logo={
                <div className="flex items-center gap-2">
                  <Link href="/">
                    <AmazonLogo />
                  </Link>
                  <p className="">{siteConfig.name}</p>
                </div>
              }
            />
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
