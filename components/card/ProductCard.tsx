'use client';
import React, { FC } from 'react';
import { Card, CardProps, CardHeader, CardBody, Image, ImageProps } from '@nextui-org/react';
import clsx from 'clsx';

import { ProductType } from '@/types/product';

export interface ProductCardProps extends CardProps {
  product: ProductType;
  imageProps?: Partial<ImageProps>;
}

const ProductCard: FC<ProductCardProps> = ({ product, imageProps, ...props }) => {
  return (
    <Card {...props} className={clsx('py-4', props.className)}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{product.name}</p>
      </CardHeader>
      <CardBody className="overflow-visible w-full py-2">
        <Image
          isZoomed
          alt={`${product.name} image`}
          className="rounded-xl object-cover w-full"
          fallbackSrc={'https://nextui.org/images/hero-card-complete.jpeg'}
          src={'https://nextui.org/images/hero-card-complete.jpeg'}
          {...imageProps}
        />
      </CardBody>
    </Card>
  );
};

export default ProductCard;
