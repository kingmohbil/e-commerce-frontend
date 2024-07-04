'use client';
import React, { FC } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownProps,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export interface CategoriesMenuProps extends Partial<DropdownProps> {
  categories: CategoryType[];
  triggerComponent?: React.ReactNode;
}

const CategoriesMenu: FC<CategoriesMenuProps> = ({ categories, triggerComponent, ...props }) => {
  const router = useRouter();

  return (
    <Dropdown {...props}>
      <DropdownTrigger>{triggerComponent || <></>}</DropdownTrigger>
      <DropdownMenu onAction={(key) => router.push(`/category/${key}/product`)}>
        {categories.map((category) => (
          <DropdownItem key={category._id} className="capitalize">
            {category.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoriesMenu;
