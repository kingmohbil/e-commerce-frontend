'use client';

import React, { FC } from 'react';
import { NextUIProvider as UIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export interface NextUIProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const NextUIProvider: FC<NextUIProviderProps> = ({ children, themeProps }) => {
  const router = useRouter();

  return (
    <UIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </UIProvider>
  );
};

export default NextUIProvider;
