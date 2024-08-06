import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../data';
import { BasketItemsType, DataType } from '../../types/types';

type ProductsState = {
  products: DataType[];
  basketItems: BasketItemsType[];
  total: number;
  numItemsInBasket: number;
};

const getBasketItemsFromStorage = (): BasketItemsType[] => {
  const basketItemsStorage = localStorage.getItem('basketItems');
  return basketItemsStorage ? JSON.parse(basketItemsStorage) : [];
};

const initialState: ProductsState = {
  products: data,
  basketItems: getBasketItemsFromStorage(),
  total: 0,
  numItemsInBasket: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ productItem: DataType }>) => {
      const { productItem } = action.payload;
      const data = state.basketItems.find((item) => item.id === productItem.id);

      if (data) {
        data.amount = data.amount + 1;
      } else {
        state.basketItems.push({
          ...productItem,
          amount: 1,
          showProductAmountBtn: true,
        });
      }

      localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
      productsSlice.caseReducers.calculateTotals(state);
      productsSlice.caseReducers.countItemsInBasket(state);
    },

    decrementProductAmount: (
      state,
      action: PayloadAction<{ productItem: DataType }>
    ) => {
      const { productItem } = action.payload;

      const data = state.basketItems.find((item) => item.id === productItem.id);

      if (data) {
        data.amount = data.amount - 1;

        if (data.amount === 0) {
          state.basketItems = state.basketItems.filter(
            (item) => item.id !== data.id
          );
        }
      }

      localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
      productsSlice.caseReducers.calculateTotals(state);
      productsSlice.caseReducers.countItemsInBasket(state);
    },

    deleteProductFromBasket: (
      state,
      action: PayloadAction<{ productItem: DataType }>
    ) => {
      const { productItem } = action.payload;

      state.basketItems = state.basketItems.filter(
        (item) => item.id !== productItem.id
      );

      localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
      productsSlice.caseReducers.calculateTotals(state);
      productsSlice.caseReducers.countItemsInBasket(state);
    },

    calculateTotals: (state) => {
      state.total = state.basketItems.reduce(
        (acc, curr) => acc + curr.amount * curr.price,
        0
      );
    },

    countItemsInBasket: (state) => {
      state.numItemsInBasket = state.basketItems.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
    },

    clearBasketItems: (state) => {
      state.basketItems = [];

      localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
      productsSlice.caseReducers.calculateTotals(state);
      productsSlice.caseReducers.countItemsInBasket(state);
    },
  },
});

export const {
  addProduct,
  decrementProductAmount,
  deleteProductFromBasket,
  clearBasketItems,
  calculateTotals,
  countItemsInBasket,
} = productsSlice.actions;

export default productsSlice.reducer;
