'use client';
import React, { FC } from 'react';
import {
  ModalProps,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
} from '@nextui-org/react';

import Item from './Item';

import { useAppSelector, useAppDispatch } from '@/hooks';
import { close } from '@/redux/slices/cart';

export interface CartModalProps extends Omit<ModalProps, 'children' | 'onClose' | 'open'> {
  children?: React.ReactNode;
  modalTitle?: React.ReactNode | string;
  submitTitle?: React.ReactNode | string;
}

const CartModal: FC<CartModalProps> = ({ modalTitle, submitTitle, ...props }) => {
  const cart = useAppSelector((store) => store.cart);
  const dispatcher = useAppDispatch();

  const onClose = () => dispatcher(close());

  return (
    <Modal isOpen={cart.open} size="lg" onClose={onClose} {...props}>
      <ModalContent>
        <ModalHeader>
          <h1 className="text-2xl">{modalTitle}</h1>
        </ModalHeader>
        <ModalBody>
          {cart.items.map((item) => (
            <Item key={`${item.id}${item.size}`} item={item} />
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={onClose}>
            {submitTitle ?? 'Submit'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
