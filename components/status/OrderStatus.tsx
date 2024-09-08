import React, { FC } from 'react';
import clsx from 'clsx';

import { OrderStatuses } from '@/types/order';

export interface OrderStatusProps extends React.ComponentProps<'p'> {
  status: OrderStatuses;
}

export const getOrderStatusColor = (status: OrderStatuses) => {
  switch (status) {
    case 'processing':
    case 'waiting-for-delivery':
      return 'text-warning';

    case 'processed':
      return 'text-primary';

    case 'delivering':
    case 'delivered':
      return 'text-success';

    default:
      return 'text-danger';
  }
};

const OrderStatus: FC<OrderStatusProps> = ({ status, ...props }) => {
  return (
    <p {...props} className={clsx(`${getOrderStatusColor(status)} capitalize`, props?.className)}>
      {status}
    </p>
  );
};

export default OrderStatus;
