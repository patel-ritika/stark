import React from 'react';
import "../../asset/styles/product/producttop.css";
import productImage from '../../asset/images/product.jpg';

const ProductTop = () => {
  return (
    <div className="product-top">
    <div className="product_top_content">
      <h5>FOR PRODUCT MANAGERS</h5>
      <h1>Ship accessible<br /> products in<br />record time.</h1>
      <h4>
      Stark is the only solution to proactively manage digital<br />
      accessibility end-to-end, and ship compliant products 5-10x<br />
      faster. Stark connects the tools your team already uses and<br />
      automatically generates real-time reports and suggested<br />
      fixes for design files, code repos and live URLs for your team<br />
      to act on.
      </h4>
      <div className="product_top_button-row">
        <button className="product_top_btn-signup">Sign up for free</button>
        <button className="product_top_btn-trial">Start a free trial</button>
      </div>
    </div>
    <div className="product_top_image-container">
      <img src={productImage} alt="Design Illustration" />
    </div>
  </div>
  );
}

export default ProductTop;
