'use client';
import React, { FC } from 'react';

import FlashMessage from './FlashMessage';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { endFlashMessage } from '@/redux/slices/flash-message';

export interface ReduxFlashMessageProps {}

const ReduxFlashMessage: FC<ReduxFlashMessageProps> = ({}) => {
  const flashMessage = useAppSelector((store) => store.flashMessage);
  const dispatcher = useAppDispatch();

  return (
    <FlashMessage
      color={flashMessage.color}
      open={!!flashMessage.message}
      onClose={() => dispatcher(endFlashMessage())}
    >
      {flashMessage.message}
    </FlashMessage>
  );
};

export default ReduxFlashMessage;
