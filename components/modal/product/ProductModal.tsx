'use client';
import React, { FC, useState } from 'react';
import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
} from '@nextui-org/react';
import Link from 'next/link';
import clsx from 'clsx';
import { CiSearch as SearchIcon } from 'react-icons/ci';

import { ProductType } from '@/types/product';
import ProductsSearch from '@/components/inputs/ProductsSearch';

export interface ProductModalProps extends Omit<ModalProps, 'children'> {
  buttonItemProps?: ButtonProps;
  title?: string;
  noProductsFoundText?: string;
}

const ProductModal: FC<ProductModalProps> = ({
  buttonItemProps,
  title,
  noProductsFoundText,
  ...props
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  return (
    <Modal backdrop="blur" scrollBehavior="inside" {...props}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>

          <ModalBody className="pb-4">
            <ProductsSearch
              startContent={<SearchIcon />}
              onProductsChange={(data) => setProducts(data.products)}
              onProductsChangeFail={() => setProducts([])}
            />
            {products.length === 0 && <p className="text-center">{noProductsFoundText}</p>}
            {products.map((product) => (
              <Button
                key={product._id}
                as={Link}
                className={clsx('justify-start min-h-16 capitalize', buttonItemProps?.className)}
                color="secondary"
                href={`/product/${product._id}`}
                radius="sm"
                startContent={<SearchIcon fontSize="20px" />}
                {...buttonItemProps}
              >
                {product.name}
              </Button>
            ))}
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
