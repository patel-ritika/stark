import React from 'react';
import "../../asset/styles/product/productthird.css";
import productthird from '../../asset/images/scale4.webp';

const ProductThird = () => {
  return (
    <div className="productthird-container">
    <img src={productthird} alt="Accessibility" className="productthird-image" />
    <h1 className="product_third_heading">
      Manage your<span className="product_third_highlight"> accessibility posture</span>  <br />across the entire organization
    </h1>
    <h4 className="product_third_description">
    Addressing the issue of digital accessibility requires the same level of rigor and <br />
    prioritization as security and privacy. With Stark’s compliance frameworks and<br />
    controls, growing your company’s accessibility maturity finally becomes actionable.
    </h4>
    <button className="product_third_get-started-button">Get started for free</button>
  </div>
  );
}

export default ProductThird;
