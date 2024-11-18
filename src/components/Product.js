import React from 'react';
import ProductTop from './product/ProductTop';
import ProductSecond from './product/ProductSecond';
import DesignFour from './design/DesignFour';
import ProductThird from './product/ProductThird';
import DesignSecond from './design/DesignSecond';
import ProductFour from './product/ProductFour';
import DesignFive from './design/DesignFive';
import DesignFall from './design/DesignFall';
import HomeFive from './home/HomeFive';
import HomeThird from './home/HomeThird';

const Product = () => {
  return (
    <div>
      <ProductTop/>
      <ProductSecond/>
      <DesignFour/>
      <ProductThird/>
      <DesignSecond/>
      <ProductFour/>
      <DesignFive/>
      <DesignFall/>
      <HomeFive/>
      <HomeThird/>
    </div>
  );
}

export default Product;
