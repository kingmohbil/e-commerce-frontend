import React from 'react';
import { Card, CardBody, CardHeader, Divider, CardProps } from '@nextui-org/react';
import clsx from 'clsx';

import OrderItem from './OrderItem';
import UserDetails from './OrderUserDetails';

import { OrderStatus } from '@/components';
import { OrderType } from '@/types/order';

export interface OrderCardProps extends CardProps {
  order: OrderType<'populated'>;
  itemsHeading?: string;
  totalHeading?: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, itemsHeading, totalHeading, ...props }) => {
  return (
    <Card className={clsx('border rounded shadow-sm max-w-[400px]', props?.className)}>
      <CardHeader className="flex justify-between">
        <div className="flex flex-col">
          <UserDetails user={order.user} />
          <p className="text-small text-default-500">{order.address}</p>
        </div>
        <OrderStatus className="text-small" status={order.status} />
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="">
          <h2 className="text-lg font-semibold pb-2">{itemsHeading}</h2>
          <div className="flex flex-col pl-4">
            {order.items.map((item) => (
              <OrderItem
                key={`${item.product}${item.size}`}
                product={{ id: item.product, count: item.quantity, ...item }}
              />
            ))}
          </div>
        </div>
        <p className="flex justify-end gap-1 items-center">
          <strong className="text-medium font-semibold">{totalHeading}</strong>{' '}
          <span className="text-sm font-normal">${order.total.toFixed(2)}</span>
        </p>
      </CardBody>
    </Card>
  );
};

export default OrderCard;
