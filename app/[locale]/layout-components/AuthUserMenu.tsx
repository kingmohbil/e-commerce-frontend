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
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import paths from '@/config/paths';

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
        <DropdownItem
          key="dashboard"
          as={Link}
          href={paths.dashboardPage}
          startContent={<AiOutlineDashboard size="20px" />}
        >
          {t('authLinks.dashboard')}
        </DropdownItem>
        <DropdownItem
          key="settings"
          as={Link}
          href={paths.settingsPage}
          startContent={<AiOutlineSetting size="20px" />}
        >
          {t('authLinks.settings')}
        </DropdownItem>
        <DropdownItem key="logout" color="danger" startContent={<AiOutlineLogout size="20px" />}>
          {t('authLinks.logout')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthUserMenu;
