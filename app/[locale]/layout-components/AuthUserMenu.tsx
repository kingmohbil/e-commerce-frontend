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

interface AuthUserMenuProps extends Partial<DropdownProps> {
  dropdownTriggerProps?: DropdownTriggerProps;
  user?: UserType;
}

const AuthUserMenu: FC<AuthUserMenuProps> = ({ dropdownTriggerProps, user, ...props }) => {
  return (
    <Dropdown {...props}>
      <DropdownTrigger {...dropdownTriggerProps}>
        <Button variant="bordered">
          {user?.firstName} {user?.lastName}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthUserMenu;
