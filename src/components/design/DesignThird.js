import React from 'react';
import "../../asset/styles/design/designthird.css";
import designthirdImage from '../../asset/images/designthird.webp';

const DesignThird = () => {
  return (
    <div className="designthird-container">
      <img src={designthirdImage} alt="Accessibility" className="designthird-image" />
      <h1 className="design_third_heading">
        <span className="design_third_highlight">Smoothest design to developer</span> <br />hand-off in the business
      </h1>
      <h4 className="design_third_description">
      Whether you design in Figma, Sketch, or Adobe XD, Stark takes the guesswork out of <br />
      accessibility annotations. And in Figma’s Dev Mode, annotations translate directly into<br />
      code snippets for developers to take over. Specs never seemed so spectacular.
      </h4>
      <button className="design_third_get-started-button">Get started for free</button>
    </div>
  );
}

export default DesignThird;
