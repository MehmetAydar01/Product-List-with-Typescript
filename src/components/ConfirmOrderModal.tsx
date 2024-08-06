import { StyledModal } from '../styled/styledProducts';
import orderConfirm from '../assets/images/icon-order-confirmed.svg';
import OrderTotal from './OrderTotal';
import { useAppSelector, useAppDispatch } from '../hooks';
import { closeModal } from '../features/modal/ModalSlice';
import { clearBasketItems } from '../features/product/ProductsSlice';

const ConfirmOrderModal = () => {
  const { basketItems } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(closeModal());
    dispatch(clearBasketItems());
  };

  return (
    <StyledModal>
      {/* Modal Container */}
      <div
        className={`modal-container ${
          basketItems.length >= 3 ? 'scrollBarStyle' : ''
        }`}
      >
        {/* Modal */}
        <div className='modal'>
          <div>
            <img src={orderConfirm} alt='order confirm image' />
          </div>
          <div className='order-confirm-title'>
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
          </div>
          <div
            className='orders-confirm-list'
            style={{ overflowY: basketItems.length >= 3 ? 'scroll' : 'hidden' }}
          >
            {/* Orders List Info */}
            {basketItems.map((item) => {
              const { image, id, name, price, amount } = item;
              return (
                <article key={id} className='order-item'>
                  <div className='order-image'>
                    <img src={image} alt={name} />
                  </div>
                  <div className='order-info'>
                    <h4>{name}</h4>
                    <p>
                      <span>{amount}x</span>
                      <span>@ ${price.toFixed(2)}</span>
                    </p>
                  </div>
                  <div className='order-item-total-price'>
                    <span>${(amount * price).toFixed(2)}</span>
                  </div>
                </article>
              );
            })}
            {/* Order Total Price */}
            <OrderTotal />
          </div>
          {/* Start New Order Button */}
          <div className='start-new-order'>
            <button
              type='button'
              className='start-new-order-btn'
              onClick={handleClick}
            >
              Start New Order
            </button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default ConfirmOrderModal;
