'use client';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from '../../redux/store';

export interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
