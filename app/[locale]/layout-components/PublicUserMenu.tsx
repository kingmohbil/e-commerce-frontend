'use client';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dropdown,
  DropdownProps,
  DropdownTrigger,
  DropdownTriggerProps,
  Button,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
1;

export interface PublicUserMenuProps extends Partial<DropdownProps> {
  dropdownTriggerProps?: DropdownTriggerProps;
}

const PublicUserMenu: FC<PublicUserMenuProps> = ({ dropdownTriggerProps, ...props }) => {
  const { t } = useTranslation('');

  return (
    <Dropdown backdrop="blur" {...props}>
      <DropdownTrigger {...dropdownTriggerProps}>
        <Button isIconOnly size="md" variant="solid">
          <AiOutlineUser size="20px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="capitalize">
        <DropdownItem key="login">
          <Link href="/login">{t('authLinks.login')}</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PublicUserMenu;
