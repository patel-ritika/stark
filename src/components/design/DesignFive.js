import React from 'react';
import "../../asset/styles/design/designfive.css";
import featureImage from '../../asset/images/set.webp';

const DesignFive = () => {
  return (
    <div className="design_five-container">
    {/* Image */}
    <img src={featureImage} alt="Feature" className="design_five_feature-image" />

    {/* Heading */}
    <h1 className="design_five_feature-heading">
      <span className="design_five_highlight">Come for the features</span>,<br /> stay for the magic
    </h1>
  </div>
  );
}

export default DesignFive;
