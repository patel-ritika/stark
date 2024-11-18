import React from 'react';
import "../../asset/styles/product/productsecond.css";
import producttopImage from '../../asset/images/producttop.webp';

const ProductSecond = () => {
  return (
    <div className="productsecond-container">
      <img src={producttopImage} alt="Accessibility" className="productsecond-image" />
      <h1 className="product_second_heading">
        <span className="product_second_highlight">Send issues directly</span> to your ticketing <br />system and track progress
      </h1>
      <h4 className="product_second_description">
      Whether it’s a design file, code repo or live site – Send accessibility issues directly <br />
      from Stark’s real-time reports as tickets to your projects in Asana, Jira, Trello, Azure<br />
      DevOps, Bitbucket, Github Issues, GitLab, Linear and more.
      </h4>
      <button className="product_second_get-started-button">Get started for free</button>
    </div>
  );
}

export default ProductSecond;
