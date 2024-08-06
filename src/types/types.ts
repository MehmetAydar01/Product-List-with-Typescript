// all types

export type DataType = {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
};

export type BasketItemsType = DataType & {
  amount: number;
  showProductAmountBtn: boolean;
};
