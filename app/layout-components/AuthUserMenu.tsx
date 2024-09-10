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
  Badge,
} from '@nextui-org/react';
import { AiOutlineUser, AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai';
import { RiShoppingBag3Line } from 'react-icons/ri';
import Link from 'next/link';

import text from '@/config/languages/en/text.json';
import paths from '@/config/paths.json';
import { useAppDispatch, useCart } from '@/hooks';
import { open } from '@/redux/slices/cart';

interface AuthUserMenuProps extends Partial<DropdownProps> {
  dropdownTriggerProps?: DropdownTriggerProps;
}

const AuthUserMenu: FC<AuthUserMenuProps> = ({ dropdownTriggerProps, ...props }) => {
  const dispatcher = useAppDispatch();

  const cart = useCart();

  return (
    <Dropdown backdrop="blur" {...props}>
      <DropdownTrigger {...dropdownTriggerProps}>
        <Button isIconOnly size="md" variant="solid">
          <AiOutlineUser size="20px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="capitalize">
        <DropdownItem
          key="cart"
          startContent={
            <Badge color="secondary" content={cart.cart.items.length} size="sm">
              <AiOutlineShoppingCart size="20px" />
            </Badge>
          }
          onPress={() => dispatcher(open())}
        >
          {text.nav.authLinks.cart}
        </DropdownItem>
        <DropdownItem
          key="orders"
          as={Link}
          color="primary"
          href={paths.orders}
          startContent={<RiShoppingBag3Line size="20px" />}
        >
          {text.nav.authLinks.orders}
        </DropdownItem>
        <DropdownItem key="logout" color="danger" startContent={<AiOutlineLogout size="20px" />}>
          {text.nav.authLinks.logout}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthUserMenu;
