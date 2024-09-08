'use client';
import React, { FC, useState } from 'react';
import { Textarea, TextAreaProps } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { useFlashMessage, useAppSelector } from '@/hooks';
import { create } from '@/actions/order';
import { EventButton, ServerActionButtonProps } from '@/components';

export interface SubmitHandlerProps extends TextAreaProps {
  submitTitle?: string;
  submitProps?: ServerActionButtonProps;
  redirectOnSuccess?: string;
}

const SubmitHandler: FC<SubmitHandlerProps> = ({
  submitTitle,
  submitProps,
  redirectOnSuccess,
  ...props
}) => {
  const cart = useAppSelector((store) => store.cart);
  const flashMessage = useFlashMessage();
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div>
      <Textarea
        isRequired
        errorMessage={error}
        id="address"
        isInvalid={!!error}
        labelPlacement="outside"
        name="address"
        size="lg"
        value={address}
        variant="bordered"
        onChange={(e) => setAddress(e.target.value)}
        {...props}
      />
      <EventButton
        fullWidth
        className="mt-3"
        color="primary"
        variant="solid"
        onPress={async () => {
          const items = cart.items.map((item) => ({
            product: item.id,
            quantity: item.count,
            size: item.size,
          }));

          const res = await create({ address, items });

          if (!!res.message)
            flashMessage.send({
              message: res.message,
              color: res.success ? 'success' : 'danger',
              autoHide: 5000,
            });

          if (res.success) {
            setError('');
            setAddress('');
            redirectOnSuccess && router.push(redirectOnSuccess);
          } else if (!!res.errors.address) setError(res.errors.address);
          else setError('');
        }}
        {...submitProps}
      >
        {submitTitle}
      </EventButton>
    </div>
  );
};

export default SubmitHandler;
