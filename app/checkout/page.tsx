import React, { FC } from 'react';

import Checkout from './components/checkout';

import { Protected } from '@/components';
import text from '@/config/languages/en/checkout.json';
import paths from '@/config/paths.json';

export interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <Protected>
      <div className="flex flex-1 mt-9 flex-col mx-4 sm:mx-28 md:mx-80 lg:mx-96 mb-8">
        <h1 className="capitalize text-5xl font-medium">{text.title}</h1>
        <Checkout
          emptyCartProps={{ text: text.emptyCart }}
          submitHandlerProps={{
            submitTitle: text.submitButton,
            label: text.addressLabel,
            placeholder: text.addressPlaceholder,
            redirectOnSuccess: paths.home,
          }}
        />
      </div>
    </Protected>
  );
};

export default Page;
