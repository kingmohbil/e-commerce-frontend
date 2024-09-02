'use client';
import React, { FC, useState } from 'react';
import { Button } from '@nextui-org/react';

import FlashMessage from '@/components/alert/FlashMessage';
import text from '@/config/languages/en/text.json';

export interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)} />
      <FlashMessage color="danger" open={open} onClose={() => setOpen(false)}>
        Welcome
      </FlashMessage>
    </>
  );
};

export default Page;
