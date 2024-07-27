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
import { AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';

import paths from '@/config/paths';

export interface PublicUserMenuProps extends Partial<DropdownProps> {
  dropdownTriggerProps?: DropdownTriggerProps;
}

const PublicUserMenu: FC<PublicUserMenuProps> = ({ dropdownTriggerProps, ...props }) => {
  const { t } = useTranslation('nav');

  return (
    <Dropdown backdrop="blur" {...props}>
      <DropdownTrigger {...dropdownTriggerProps}>
        <Button isIconOnly size="md" variant="solid">
          <AiOutlineUser size="20px" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="capitalize">
        <DropdownItem key="login" as={Link} href={paths.loginPage}>
          {t('publicLinks.login')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PublicUserMenu;
