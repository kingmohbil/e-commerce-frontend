'use client';
import { Button, ButtonProps } from '@nextui-org/react';
import React, { FC } from 'react';
import { CiSearch as SearchIcon } from 'react-icons/ci';

import { useReduxModal } from '@/hooks';

export interface SearchModalButtonProps extends ButtonProps {}

export const productsModalId = 'productsModal';

const SearchModalButton: FC<SearchModalButtonProps> = ({}) => {
  const modal = useReduxModal(productsModalId);

  return (
    <Button isIconOnly variant="light" onPress={() => modal.open({})}>
      <SearchIcon fontSize="20px" />
    </Button>
  );
};

export default SearchModalButton;
