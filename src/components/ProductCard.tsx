import { StyledButton, StyledCard } from '../styled/styledProducts';
import { BasketItemsType, DataType } from '../types/types';
import { SlBasketLoaded } from 'react-icons/sl';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addProduct } from '../features/product/ProductsSlice';
import AddProductWithAmount from './AddProductWithAmount';
import { toast } from 'react-toastify';

type ProductCardProps = {
  product: DataType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, image, id, category } = product;

  const { basketItems } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleAddCartBtn: BasketItemsType | undefined = basketItems.find(
    (item) => {
      return item.id === id;
    }
  );

  const handleProduct = () => {
    dispatch(addProduct({ productItem: product }));
    toast.success('product added to cart');
  };

  return (
    <StyledCard>
      <img
        src={image}
        alt={name}
        style={{
          border: `${
            handleAddCartBtn?.showProductAmountBtn
              ? '2px solid hsl(14, 86%, 42%)'
              : ''
          } `,
        }}
      />
      <div className='btn'>
        {handleAddCartBtn?.showProductAmountBtn ? (
          <AddProductWithAmount
            handleAddCartBtn={handleAddCartBtn}
            product={product}
          />
        ) : (
          <StyledButton type='button' onClick={handleProduct}>
            <SlBasketLoaded /> Add to Cart
          </StyledButton>
        )}
      </div>
      <div className='card-footer'>
        <p>{category}</p>
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
