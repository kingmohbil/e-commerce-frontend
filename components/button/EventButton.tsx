'use client';
import React, { FC, useState } from 'react';
import { Button, ButtonProps } from '@nextui-org/react';

export interface EventButtonProps extends ButtonProps {}

const EventButton: FC<EventButtonProps> = ({ ...props }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      isLoading={loading}
      type="button"
      {...props}
      onPress={async (e) => {
        setLoading(true);
        try {
          props.onPress && (await props.onPress(e));
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }}
    >
      {props.children}
    </Button>
  );
};

export default EventButton;
