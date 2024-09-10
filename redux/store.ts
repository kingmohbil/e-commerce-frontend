import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cart from './slices/cart';
import flashMessage from './slices/flash-message';
import modal from './slices/modal';

const persistConfig = {
  key: 'persist',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart,
  flashMessage,
  modal,
});

export const store = configureStore({
  reducer: rootReducer,
});

const makeConfiguredStore = () => store;

export const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) return makeConfiguredStore();

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  let store: any = configureStore({
    reducer: persistedReducer,
  });

  store.__persistor = persistStore(store);

  return store;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
