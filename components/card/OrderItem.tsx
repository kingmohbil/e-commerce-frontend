import React, { FC } from 'react';

export interface OrderItemProps {
  product: CartItem;
}

const OrderItem: FC<OrderItemProps> = ({ product }) => {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex gap-2 flex-col">
        <p className="text-sm font-medium">{product.name}</p>
        <div className="flex justify-between">
          <p className="text-xs opacity-65">Qty {product.count}</p>
          <p className="text-xs opacity-65">${product.price.toFixed(2)} each</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium">${(product.price * product.count).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderItem;
