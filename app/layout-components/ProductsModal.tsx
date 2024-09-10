'use client';
import React, { FC } from 'react';

import { productsModalId } from './SearchModalButton';

import text from '@/config/languages/en/layout.json';
import ProductModal, { ProductModalProps } from '@/components/modal/product/ProductModal';
import { useReduxModal } from '@/hooks';

export interface ProductsModalProps extends Partial<ProductModalProps> {}

const ProductsModal: FC<ProductsModalProps> = ({}) => {
  const modal = useReduxModal(productsModalId);

  return (
    <ProductModal
      isOpen={modal.isOpen && modal.modalId === productsModalId}
      noProductsFoundText={text.productsModal.noProductsFound}
      title={text.productsModal.title}
      onClose={modal.close}
    />
  );
};

export default ProductsModal;
