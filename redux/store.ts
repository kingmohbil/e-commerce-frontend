import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import cart from './slices/cart';
import flashMessage from './slices/flash-message';
import modal from './slices/modal';

export const store = configureStore({
  reducer: {
    cart,
    flashMessage,
    modal,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
