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
import { AiOutlineUser } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

interface AuthUserMenuProps extends Partial<DropdownProps> {
  dropdownTriggerProps?: DropdownTriggerProps;
}

const AuthUserMenu: FC<AuthUserMenuProps> = ({ dropdownTriggerProps, ...props }) => {
  const { t } = useTranslation('');

  return (
    <Dropdown backdrop="blur" {...props}>
      <DropdownTrigger {...dropdownTriggerProps}>
        <Button isIconOnly size="md" variant="solid">
          <AiOutlineUser size="20px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="capitalize">
        <DropdownItem key="dashboard">
          <Link href="/protected/dashboard">{t('authLinks.dashboard')}</Link>
        </DropdownItem>
        <DropdownItem key="settings">
          <Link href="/protected/settings">{t('authLinks.settings')}</Link>
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          {t('authLinks.logout')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthUserMenu;
