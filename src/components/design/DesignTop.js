import React from 'react';
import "../../asset/styles/design/designtop.css";
import designerImage from '../../asset/images/scale2.webp';

const DesignTop = () => {
  return (
    <div className="design-top">
      <div className="design_top_content">
        <h5>FOR DESIGNERS</h5>
        <h1>Accessible,<br /> by design</h1>
        <h4>
        Stark helps eliminate up to 100% of the accessibility issues<br />
        originating in design. Our AI-powered Sidekick experience<br />
        combined with our best-in-class manual tools helps every<br />
        designer find and fix accessibility issues within seconds. And<br />
        hand over fully annotated designs to developers.
        </h4>
        <div className="design_top_button-row">
          <button className="design_top_btn-signup">Sign up for free</button>
          <button className="design_top_btn-trial">Start a free trial</button>
        </div>
      </div>
      <div className="design_top_image-container">
        <img src={designerImage} alt="Design Illustration" />
      </div>
    </div>
  );
}

export default DesignTop;
