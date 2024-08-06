import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/product/ProductsSlice';
import modalReducer from './features/modal/ModalSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: productsState}
export type AppDispatch = typeof store.dispatch;
