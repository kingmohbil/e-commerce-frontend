import type { PayloadAction } from '@reduxjs/toolkit';

import { ThemeColors } from '@nextui-org/react';
import { createSlice } from '@reduxjs/toolkit';

interface FlashMessageType {
  message: string;
  color?: keyof ThemeColors;
}

const initialState: FlashMessageType = {
  message: '',
};

const flashMessageSlice = createSlice({
  name: 'flashMessage',
  initialState,
  reducers: {
    //* triggering a flash message

    setFlashMessage: (
      state,
      { payload: { message, color = 'default' } }: PayloadAction<FlashMessageType>
    ) => {
      state.message = message;
      state.color = color;
    },
    //* removing the flash message

    endFlashMessage: () => initialState,
  },
});

export const { setFlashMessage, endFlashMessage } = flashMessageSlice.actions;

export type { FlashMessageType };

export default flashMessageSlice.reducer;
