import React, { FC } from 'react';
import { Textarea } from '@nextui-org/react';

import Checkout from './components/checkout';

import { Protected } from '@/components';
import text from '@/config/languages/en/checkout.json';

export interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <Protected>
      <div className="flex flex-1 mt-9 flex-col mx-4 sm:mx-28 md:mx-80 lg:mx-96">
        <h1 className="capitalize text-5xl font-medium">{text.title}</h1>

        <Checkout emptyCartProps={{ text: text.emptyCart }} />
        {/* <Input
        isRequired
        errorMessage={data?.errors?.email}
        id="email"
        isInvalid={!!data?.errors?.email}
        label={loginFormText.label.email}
        labelPlacement="outside"
        name="email"
        placeholder={loginFormText.placeholder.email}
        size="lg"
        variant="bordered"
      /> */}
      </div>
    </Protected>
  );
};

export default Page;
