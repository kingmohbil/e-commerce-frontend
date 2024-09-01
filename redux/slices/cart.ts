import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CartModal extends CartType {
  open: boolean;
}

const initialState: CartModal = {
  open: false,
  items: [],
  total: 0,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open(state) {
      state.open = true;
    },

    close(state) {
      state.open = false;
    },

    add: (state, { payload }: PayloadAction<CartItem>) => {
      // searching for the existence of the product
      const index = state.items.findIndex(
        (product) => product.id === payload.id && product.size === payload.size
      );

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

    remove: (state, { payload }: PayloadAction<{ id: string; size?: string }>) => {
      const index = state.items.findIndex(
        (item) => item.id === payload.id && payload.size === item.size
      );

      if (index !== -1) {
        const count = state.items[index].count || 1;

        if (count > 1) {
          state.items[index].count = count - 1;
          state.total -= state.items[index].price;
        } else if (count === 1) {
          state.total -= state.items[index].price;
          state.items = state.items.filter(
            (item) => !(item.id === payload.id && item.size === payload.size)
          );
        }
      }
    },
    clear: () => initialState,
  },
});

export const { add, remove, open, close, clear } = cart.actions;
export const { actions } = cart;

export default cart.reducer;
