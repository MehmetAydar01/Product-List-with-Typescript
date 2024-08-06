import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from 'react-icons/io';
import { AmountProductButton } from '../styled/styledProducts';
import { BasketItemsType, DataType } from '../types/types';
import { useAppDispatch } from '../hooks';
import {
  addProduct,
  decrementProductAmount,
} from '../features/product/ProductsSlice';
import { toast } from 'react-toastify';

type PropsAddProduct = {
  handleAddCartBtn: BasketItemsType;
  product: DataType;
};

const AddProductWithAmount = ({
  handleAddCartBtn,
  product,
}: PropsAddProduct) => {
  const dispatch = useAppDispatch();

  return (
    <AmountProductButton>
      <button
        type='button'
        onClick={() => {
          dispatch(decrementProductAmount({ productItem: product }));
          toast.error('product quantity decreased');
        }}
      >
        <IoIosRemoveCircleOutline />
      </button>
      <span>{handleAddCartBtn.amount}</span>
      <button
        type='button'
        onClick={() => {
          dispatch(addProduct({ productItem: product }));
          toast.success('product quantity increased');
        }}
      >
        <IoIosAddCircleOutline />
      </button>
    </AmountProductButton>
  );
};

export default AddProductWithAmount;
