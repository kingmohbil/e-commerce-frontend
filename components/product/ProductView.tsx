'use client';
import React, { FC, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Divider } from '@nextui-org/react';
import cn from 'clsx';

import {
  ProductTag,
  ProductTagProps,
  Sizes,
  SizesProps,
  AddToCart,
  AddToCartProps,
} from '@/components/product';
import { ProductType } from '@/types/product';

export interface ProductViewProps {
  className?: string;
  imageProps?: Partial<ImageProps>;
  productTagProps?: Partial<ProductTagProps>;
  product: ProductType;
  sizesProps?: Partial<SizesProps>;
  sizeLabel?: string;
  addToCartProps?: Partial<AddToCartProps>;
  isAuthenticated?: boolean;
}

const ProductView: FC<ProductViewProps> = ({
  imageProps,
  productTagProps,
  product,
  sizesProps,
  sizeLabel,
  addToCartProps,
  isAuthenticated,
  className,
}) => {
  const [selectedSize, setSelectedSize] = useState(product.metadata[0]);

  return (
    <div className={cn('rounded-lg w-full shadow-sm bg-white p-8 flex gap-14', className)}>
      <Image alt={product.name} height={550} src={product.imageURL} width={735} {...imageProps} />
      <div className="flex flex-col gap-4">
        <ProductTag name={product.name} price={selectedSize.price} {...productTagProps} />
        <Divider />

        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase">{sizeLabel}</p>
          <Sizes
            metadata={product.metadata}
            value={selectedSize}
            onChange={(size) => setSelectedSize(size)}
            {...sizesProps}
          />
        </div>
        {isAuthenticated && <AddToCart item={selectedSize} product={product} {...addToCartProps} />}
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductView;
