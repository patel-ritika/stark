import React from 'react';
import "../../asset/styles/developer/developertop.css";
import developImage from '../../asset/images/developtop.webp';

const DeveloperTop = () => {
  return (
    <div className="develop-top">
    <div className="develop_top_content">
      <h5>FOR DEVELOPERS</h5>
      <h1>Ready. Set.<br /> Accessible<br />Code.</h1>
      <h4>
      Stark makes the handoff from designer to developer<br />
      seamless, and accelerates the implementation of accessible<br />
      code. Advanced dev tools and continuous accessibility<br />
      integrations in GitHub ensure an end-to-end accessibility<br />
      workflow your team actually loves – fully private and secure.
      </h4>
      <div className="develop_top_button-row">
        <button className="develop_top_btn-signup">Sign up for free</button>
        <button className="develop_top_btn-trial">Start a free trial</button>
      </div>
    </div>
    <div className="develop_top_image-container">
      <img src={developImage} alt="Design Illustration" />
    </div>
  </div>
  );
}

export default DeveloperTop;
