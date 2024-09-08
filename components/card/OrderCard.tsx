import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

import OrderItem from './OrderItem';
import UserDetails from './OrderUserDetails';

import { OrderType } from '@/types/order';

export interface OrderCardProps {
  order: OrderType<'populated'>;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <Card className="border rounded shadow-sm max-w-[400px]">
      <CardHeader>
        <UserDetails user={order.user} />
      </CardHeader>
      <CardBody>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Order Items</h2>
          <div className="flex flex-col pl-4">
            {order.items.map((item) => (
              <OrderItem
                key={`${item.product}${item.size}`}
                product={{ id: item.product, count: item.quantity, ...item }}
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p>
            <strong className="text-sm font-medium">Address:</strong>
            <span>{order.address}</span>
          </p>
          <p>
            <strong className="text-sm font-medium">Payment Method:</strong>{' '}
            <span>{order.paymentMethod}</span>
          </p>
          <p>
            <strong className="text-sm font-medium">Status:</strong> <span>{order.status}</span>
          </p>
          <p>
            <strong className="text-sm font-medium">Total:</strong> <span>${order.total}</span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderCard;
