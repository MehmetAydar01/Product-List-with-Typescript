import { useAppSelector } from '../hooks';

const OrderTotal = () => {
  const { total } = useAppSelector((state) => state.products);
  return (
    <section className='order-total'>
      <span>Order Total</span>
      <span>${total.toFixed(2)}</span>
    </section>
  );
};

export default OrderTotal;
