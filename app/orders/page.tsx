import React, { FC } from 'react';

import { Protected } from '@/components';
import { Order } from '@/helpers';
import { OrderCard } from '@/components';

export interface PageProps {}

const LoadOrders = async () => {
  const { orders } = await new Order().getAll();

  return orders.map((order) => <OrderCard key={order._id} order={order} />);
};

const Page: FC<PageProps> = ({}) => {
  return (
    <Protected>
      <LoadOrders />
    </Protected>
  );
};

export default Page;
