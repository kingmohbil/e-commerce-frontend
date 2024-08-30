// persistConfig.js
import storage from 'redux-persist/lib/storage'; // Use local storage as the storage engine

const persistConfig = {
  key: 'cart',
  storage,
};

export default persistConfig;
