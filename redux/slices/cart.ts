import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CartType = {
  items: [],
  total: 0,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<CartItem>) => {
      // searching for the existence of the product
      const index = state.items.findIndex((product) => product.id === payload.id);

      // if the product isn't found the item is added to the array
      if (index === -1) {
        state.items.push({ ...payload, count: 1 });
        state.total += payload.price;
      } else {
        const count = state.items[index].count || 1;

        state.items[index].count = count + 1;
        state.total += payload.price;
      }
    },
    removeItem: (state, { payload }: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === payload);

      if (index !== -1) {
        const count = state.items[index].count || 1;

        if (count > 1) {
          state.items[index].count = count - 1;
          state.total -= state.items[index].price;
        } else if (count === 1) {
          state.total -= state.items[index].price;
          state.items = state.items.filter((item) => item.id !== payload);
        }
      }
    },
    clear: () => initialState,
  },
});

export const { addItem, removeItem, clear } = cart.actions;
export const { actions } = cart;

export default cart.reducer;
