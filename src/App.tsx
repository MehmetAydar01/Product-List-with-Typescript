import { useAppSelector, useAppDispatch } from './hooks';
import { useEffect } from 'react';
import {
  StyledBasket,
  StyledContainer,
  StyledMain,
} from './styled/styledProducts';
import { ProductList, Basket, ConfirmOrderModal } from './components';
import {
  calculateTotals,
  countItemsInBasket,
} from './features/product/ProductsSlice';
import { toast } from 'react-toastify';

function App() {
  const { numItemsInBasket } = useAppSelector((state) => state.products);
  const { confirmOrderModal } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
    dispatch(countItemsInBasket());
    toast.warning('please select product');
  }, []);

  return (
    <>
      <StyledMain>
        {/* Products List */}
        <section>
          <h2>Desserts</h2>
          <StyledContainer>
            <ProductList />
          </StyledContainer>
        </section>

        {/* Basket Cart */}
        <StyledBasket>
          <h3 className='basket-title'>Your Cart ({numItemsInBasket})</h3>
          <Basket />
        </StyledBasket>
      </StyledMain>

      {/* Modal of Confirmed Order */}
      {confirmOrderModal && <ConfirmOrderModal />}
    </>
  );
}

export default App;
