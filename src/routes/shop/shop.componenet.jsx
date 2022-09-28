import { useContext } from 'react';

import ProductCard from '../../componenets/product-card/product-card.component.jsx';

import { ProdcutContext } from '../../contexts/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProdcutContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
