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
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import Link from 'next/link';

import text from '@/config/languages/en/text.json';
import paths from '@/config/paths.json';
import { useAppDispatch } from '@/hooks';
import { open } from '@/redux/slices/cart';

interface AuthUserMenuProps extends Partial<DropdownProps> {
  dropdownTriggerProps?: DropdownTriggerProps;
}

const AuthUserMenu: FC<AuthUserMenuProps> = ({ dropdownTriggerProps, ...props }) => {
  const dispatcher = useAppDispatch();

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
        <DropdownItem
          key="cart"
          startContent={<AiOutlineShoppingCart size="20px" />}
          onPress={() => dispatcher(open())}
        >
          {text.nav.authLinks.cart}
        </DropdownItem>
        <DropdownItem key="logout" color="danger" startContent={<AiOutlineLogout size="20px" />}>
          {text.nav.authLinks.logout}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthUserMenu;
