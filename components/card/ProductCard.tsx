'use client';
import React, { ComponentProps, FC } from 'react';
import { Card, CardProps, CardFooter, CardBody, CardFooterProps } from '@nextui-org/react';
import clsx from 'clsx';
import Link from 'next/link';

import { AnimatedImage, AnimatedImageProps } from '@/components';

export interface ProductCardProps extends CardProps {
  product: ProductType;
  imageProps?: Partial<AnimatedImageProps>;
  imageContainerProps?: ComponentProps<'div'>;
  action?: React.ReactNode;
  cardFooterProps?: CardFooterProps;
}

const ProductCard: FC<ProductCardProps> = ({
  product,
  imageContainerProps,
  imageProps,
  cardFooterProps,
  action,
  ...props
}) => {
  return (
    <Card
      radius="none"
      {...props}
      className={clsx('pb-4 min-w-72 rounded-b-lg select-none', props.className)}
    >
      <div {...imageContainerProps} className={clsx('h-40', imageContainerProps?.className)}>
        <AnimatedImage fill alt={product.name} src={product.imageURL} {...imageProps} />
      </div>
      <CardBody>
        <Link className="hover:underline" href={`/product/${product._id}`}>
          <p className="text-lg capitalize font-semibold">{product.name}</p>
        </Link>
        <p className="text-default-500 px-1">${product.defaultPrice.toFixed(2)}</p>
      </CardBody>
      <CardFooter
        {...cardFooterProps}
        className={clsx('justify-between h-20 text-ellipsis gap-8', cardFooterProps?.className)}
      >
        <p className="flex-1 text-sm capitalize text-default-600 text-left line-clamp-3">
          {product.description}
        </p>
        {action}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
