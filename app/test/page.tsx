'use client';
import React, { FC, useState } from 'react';
import { Button } from '@nextui-org/react';

import { CartModal } from '@/components';
import text from '@/config/languages/en/text.json';

export interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const [open, setOpen] = useState(true);

  const onClose = () => setOpen(false);

  return (
    <>
      <Button>{text.common.button.addToCart}</Button>
      <CartModal
        isOpen={open}
        modalTitle={text.modals.cart.title}
        submitTitle={text.modals.cart.submitTitle}
      />
    </>
  );
};

export default Page;
