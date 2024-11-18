import React from 'react';
import "../../asset/styles/product/productfour.css";
import prodev from '../../asset/images/developsecond.webp';

const ProductFour = () => {
  return (
    <div className="productfour-container">
    <img src={prodev} alt="Accessibility" className="productfour-image" />
    <h1 className="product_four_heading">
      <span className="product_four_highlight">Integrated, advanced</span> tooling that <br />saves you up to 100x the dev ccost
    </h1>
    <h4 className="product_four_description">
    Scan for accessibility issues as early as first lines of code. With continuous scanning in <br />
    your repos as well as code highlighting in the browser, live preview to test fixes, and<br />
    lightning fast WCAG audits, Stark’s integrated tools are web dev powerhouse.
    </h4>
    <button className="product_four_get-started-button">Get started for free</button>
  </div>
  );
}

export default ProductFour;
