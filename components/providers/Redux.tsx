'use client';
import React, { FC, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { makeStore, AppStore } from '../../redux/store';

export interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  const storeRef = useRef<AppStore>();

  // Create the store instance the first time this renders
  if (!storeRef.current) storeRef.current = makeStore();

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={storeRef.current.__persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
