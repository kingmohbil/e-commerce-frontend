import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState<T = any> {
  isOpen: boolean;
  modalId?: string;
  data: T | null;
}

// Initial state
const initialState: ModalState = {
  isOpen: false,
  data: null,
};

// Create the slice
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: <T>(state: ModalState<T>, action: PayloadAction<Partial<ModalState>>) => {
      state.isOpen = true;
      if (action.payload.data) state.data = action.payload.data;
      if (action.payload.modalId) state.modalId = action.payload.modalId;
    },

    set: <T>(state: ModalState<T>, action: PayloadAction<Partial<ModalState>>) => {
      if (action.payload.data) state.data = action.payload.data;
      if (action.payload.modalId) state.modalId = action.payload.modalId;
    },

    close: () => initialState,
  },
});

export const { open, set, close } = modalSlice.actions;
export const { actions } = modalSlice;
export default modalSlice.reducer;
