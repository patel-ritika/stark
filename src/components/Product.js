import React from 'react';
import ProductTop from './product/ProductTop';
import ProductSecond from './product/ProductSecond';
import DesignFour from './design/DesignFour';
import ProductThird from './product/ProductThird';
import DesignSecond from './design/DesignSecond';
import ProductFour from './product/ProductFour';

const Product = () => {
  return (
    <div>
      <ProductTop/>
      <ProductSecond/>
      <DesignFour/>
      <ProductThird/>
      <DesignSecond/>
      <ProductFour/>
    </div>
  );
}

export default Product;
