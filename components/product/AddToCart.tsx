'use client';
import React, { FC } from 'react';
import cn from 'clsx';
import { Button, ButtonProps } from '@nextui-org/button';
import { GoPlus } from 'react-icons/go';

import { useCart } from '@/hooks/cart';
import { Metadata, ProductType } from '@/types/product';
import { useFlashMessage, FlashMessageType } from '@/hooks/flashMessage';

export interface AddToCartProps extends ButtonProps {
  product: ProductType;
  item: Metadata;
  messageProps?: FlashMessageType;
  text?: string;
}

const AddToCart: FC<AddToCartProps> = ({ item, product, messageProps, text, ...props }) => {
  const cart = useCart();
  const flashMessage = useFlashMessage();

  return (
    <Button
      color="primary"
      radius="full"
      size="lg"
      startContent={<GoPlus className="absolute left-4" fontSize="20px" />}
      onPress={() => {
        cart.add({
          id: product._id,
          name: product.name,
          size: item.size,
          price: item.price,
          count: 1,
        });
        messageProps && flashMessage.send(messageProps);
      }}
      {...props}
      className={cn('relative p-4 capitalize', props?.className)}
    >
      {text}
    </Button>
  );
};

export default AddToCart;
