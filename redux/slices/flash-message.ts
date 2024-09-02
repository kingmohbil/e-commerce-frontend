import type { PayloadAction } from '@reduxjs/toolkit';

import { ThemeColors } from '@nextui-org/react';
import { createSlice } from '@reduxjs/toolkit';

interface FlashMessageType {
  message: string;
  duration?: number;
  color?: keyof ThemeColors;
}

const initialState: FlashMessageType = {
  message: '',
  duration: 5000,
};

const flashMessageSlice = createSlice({
  name: 'flashMessage',
  initialState,
  reducers: {
    //* triggering a flash message

    setFlashMessage: (
      state,
      { payload: { message, duration = 5000, color = 'default' } }: PayloadAction<FlashMessageType>
    ) => {
      state.message = message;
      state.duration = duration;
      state.color = color;
    },
    //* removing the flash message

    endFlashMessage: () => initialState,
  },
});

export const { setFlashMessage, endFlashMessage } = flashMessageSlice.actions;

export type { FlashMessageType };

export default flashMessageSlice.reducer;
