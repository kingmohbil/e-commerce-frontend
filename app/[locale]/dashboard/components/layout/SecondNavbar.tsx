'use client';
import React, { FC } from 'react';
import { Navbar, NavbarContent, NavbarProps, Button } from '@nextui-org/react';
import { FaStore } from 'react-icons/fa';

import DashboardLink from './DashboardLink';

export interface SecondNavbarProps extends NavbarProps {
  locale: string;
}

const SecondNavbar: FC<SecondNavbarProps> = async ({}) => {
  return (
    <Navbar
      isBordered
      className="bg-white dark:bg-black justify-between"
      classNames={{ wrapper: 'min-w-full' }}
    >
      <NavbarContent />
    </Navbar>
  );
};

export default SecondNavbar;
