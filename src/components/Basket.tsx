import { useAppSelector, useAppDispatch } from '../hooks';
import emptyCard from '/images/illustration-empty-cart.svg';
import carbonNeutral from '/images/icon-carbon-neutral.svg';
import { TiDeleteOutline } from 'react-icons/ti';
import { deleteProductFromBasket } from '../features/product/ProductsSlice';
import OrderTotal from './OrderTotal';
import { openModal } from '../features/modal/ModalSlice';
import { toast } from 'react-toastify';

const Basket = () => {
  const { basketItems } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  if (basketItems.length < 1) {
    return (
      <div className='empty-basket'>
        <img src={emptyCard} alt='empty basket' />
        <p>Your added items will appear here</p>
      </div>
    );
  }

  return (
    <div className='basket'>
      {/* All Basket Items */}
      {basketItems.map((item) => {
        const { amount, price, name, id } = item;
        return (
          <article key={id} className='basket-item'>
            <div>
              <h4>{name}</h4>
              <p>
                <span className='item-amount'>{amount}x</span>
                <span className='item-price'>@ ${price.toFixed(2)}</span>
                <span className='total-item-price'>
                  ${(amount * price).toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <button
                type='button'
                className='item-delete-btn'
                onClick={() => {
                  dispatch(deleteProductFromBasket({ productItem: item }));
                  toast.error('item removed from cart');
                }}
              >
                <TiDeleteOutline />
              </button>
            </div>
          </article>
        );
      })}
      {/* Order Items Total Price */}
      <OrderTotal />
      <section className='carbon-neutral'>
        <img src={carbonNeutral} alt='carbonNeutral' />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </section>

      <section className='confirm-order'>
        <button
          type='button'
          className='confirm-order-btn'
          onClick={() => {
            dispatch(openModal());
            toast.success('Order Confirmed');
          }}
        >
          Confirm Order
        </button>
      </section>
    </div>
  );
};

export default Basket;
