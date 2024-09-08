'use client';
import React, { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { NoItemsInCart, NoItemsInCartProps } from '@/components';

export interface CheckoutProps {
  emptyCartProps?: NoItemsInCartProps;
}

const Checkout: FC<CheckoutProps> = ({ emptyCartProps }) => {
  const cart = useAppSelector((store) => store.cart);

  return cart.items.length > 0 ? (
    <div className="flex flex-col sm:max-w-96">
      <h2 className="text-4xl mt-8 mb-10">${cart.total.toFixed(2)}</h2>
      <div className="flex flex-col gap-7">
        {cart.items.map((item) => (
          <Product key={`${item.id}${item.size}`} {...item} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center mt-24">
      <NoItemsInCart {...emptyCartProps} />
    </div>
  );
};

const Product = (product: CartItem) => {
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

export default Checkout;
