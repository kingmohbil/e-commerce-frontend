import React, { FC } from 'react';
import { clsx } from 'clsx';
import { Navbar, NavbarProps, NavbarBrand, NavbarContent } from '@nextui-org/react';

export interface CustomNavbarProps extends NavbarProps {
  logo?: React.ReactNode;
  centerItems?: React.ReactNode;
  endItems?: React.ReactNode;
}

const CustomNavbar: FC<CustomNavbarProps> = ({ logo, centerItems, endItems, ...props }) => {
  return (
    <Navbar isBlurred={false} {...props} className={clsx(`shadow-2xl`, props.className)}>
      {logo && <NavbarBrand>{logo}</NavbarBrand>}
      {centerItems && (
        <NavbarContent className="flex gap-4 items-center w-full" justify="center">
          {centerItems}
        </NavbarContent>
      )}
      {endItems && (
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {endItems}
        </NavbarContent>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
