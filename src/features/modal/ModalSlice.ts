import { createSlice } from '@reduxjs/toolkit';

type ModalState = {
  confirmOrderModal: boolean;
};

const initialState: ModalState = {
  confirmOrderModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.confirmOrderModal = true;
    },
    closeModal: (state) => {
      state.confirmOrderModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
