import React, { FC } from 'react';
import { Metadata } from 'next';

import { Protected } from '@/components';
import { Order } from '@/helpers';
import { OrderCard } from '@/components';
import text from '@/config/languages/en/orders.json';

export const metadata: Metadata = {
  title: text.page.title,
};

export interface PageProps {}

const LoadOrders = async () => {
  const { orders } = await new Order().getAll();

  return orders.map((order) => (
    <OrderCard key={order._id} className="max-w-72 sm:max-w-96" order={order} />
  ));
};

const Page: FC<PageProps> = ({}) => {
  return (
    <Protected>
      <div className="flex flex-1 mt-9 flex-col mx-4 sm:mx-28 md:mx-60 lg:mx-96 mb-8">
        <h1 className="text-4xl mb-4">{text.page.heading}</h1>
        <div className="flex flex-col gap-8">
          <LoadOrders />
        </div>
      </div>
    </Protected>
  );
};

export default Page;
