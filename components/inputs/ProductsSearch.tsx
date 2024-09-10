'use client';
import React, { FC, useMemo } from 'react';
import { debounce } from 'lodash';
import { Input, InputProps } from '@nextui-org/react';

import { get } from '@/actions/product';
import { GetAllResponse } from '@/types/product';

export type GetProductsCallback = (data: GetAllResponse) => void;
export type GetProductsFailCallback = (error?: any) => void;

const loadProducts = async (
  str: string,
  onSuccess: GetProductsCallback,
  onError?: GetProductsFailCallback
) => {
  const res = await get({ name: str });

  if (res.success) onSuccess(res.data);
  else onError && onError();
};

export interface ProductsSearchProps extends InputProps {
  delay?: number;
  onProductsChange: GetProductsCallback;
  onProductsChangeFail?: GetProductsFailCallback;
}

const ProductsSearch: FC<ProductsSearchProps> = ({
  delay,
  onProductsChange,
  onProductsChangeFail,
  ...props
}) => {
  const getProducts = useMemo(
    () =>
      debounce((str: string, onSuccess: GetProductsCallback, onError?: GetProductsFailCallback) => {
        loadProducts(str, onSuccess, onError);
      }, delay ?? 300),
    [delay]
  );

  return (
    <Input
      name="search"
      placeholder="iphone 15 pro max"
      onChange={(e) => {
        getProducts(e.target.value, onProductsChange, onProductsChangeFail);
      }}
      {...props}
    />
  );
};

export default ProductsSearch;
