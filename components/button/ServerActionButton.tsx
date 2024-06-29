'use client';
import React, { FC } from 'react';
import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from '@nextui-org/react';

export interface ServerActionButtonProps extends ButtonProps {}

const ServerActionButton: FC<ServerActionButtonProps> = ({ ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button isLoading={pending} type="submit" {...props}>
      {props.children}
    </Button>
  );
};

export default ServerActionButton;
