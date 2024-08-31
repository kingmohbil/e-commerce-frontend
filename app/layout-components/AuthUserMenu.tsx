'use client';
import React, { FC } from 'react';
import {
  Dropdown,
  DropdownProps,
  DropdownTrigger,
  DropdownTriggerProps,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineDashboard,
  AiOutlineLogout,
} from 'react-icons/ai';
import Link from 'next/link';

import text from '@/config/languages/en/text.json';
import paths from '@/config/paths.json';

interface AuthUserMenuProps extends Partial<DropdownProps> {
  dropdownTriggerProps?: DropdownTriggerProps;
}

const AuthUserMenu: FC<AuthUserMenuProps> = ({ dropdownTriggerProps, ...props }) => {
  return (
    <Dropdown backdrop="blur" {...props}>
      <DropdownTrigger {...dropdownTriggerProps}>
        <Button isIconOnly size="md" variant="solid">
          <AiOutlineUser size="20px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="capitalize">
        <DropdownItem
          key="dashboard"
          as={Link}
          href={paths.dashboard}
          startContent={<AiOutlineDashboard size="20px" />}
        >
          {text.nav.authLinks.dashboard}
        </DropdownItem>
        <DropdownItem
          key="settings"
          as={Link}
          href={paths.settings}
          startContent={<AiOutlineSetting size="20px" />}
        >
          {text.nav.authLinks.settings}
        </DropdownItem>
        <DropdownItem key="logout" color="danger" startContent={<AiOutlineLogout size="20px" />}>
          {text.nav.authLinks.logout}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthUserMenu;
