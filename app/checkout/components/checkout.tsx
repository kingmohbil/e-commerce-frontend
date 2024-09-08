'use client';
import React, { FC } from 'react';

import SubmitHandler, { SubmitHandlerProps } from './submitHandler';

import { useAppSelector } from '@/hooks';
import { NoItemsInCart, NoItemsInCartProps, OrderItem } from '@/components';

export interface CheckoutProps {
  emptyCartProps?: NoItemsInCartProps;
  submitHandlerProps?: SubmitHandlerProps;
}

const Checkout: FC<CheckoutProps> = ({ emptyCartProps, submitHandlerProps }) => {
  const cart = useAppSelector((store) => store.cart);

  return cart.items.length > 0 ? (
    <div className="flex flex-col sm:max-w-96">
      <h2 className="text-4xl mt-8 mb-10">${cart.total.toFixed(2)}</h2>
      <div className="flex flex-col gap-7">
        {cart.items.map((item) => (
          <OrderItem key={`${item.id}${item.size}`} product={item} />
        ))}
      </div>
      <div className="flex flex-col mt-16">
        <SubmitHandler {...submitHandlerProps} />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center mt-24">
      <NoItemsInCart {...emptyCartProps} />
    </div>
  );
};

export default Checkout;
