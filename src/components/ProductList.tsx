import ProductCard from './ProductCard';
import { useAppSelector } from '../hooks';

const ProductList = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </>
  );
};

export default ProductList;
