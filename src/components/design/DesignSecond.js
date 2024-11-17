import React from 'react';
import "../../asset/styles/design/designsecond.css";
import accessibilityImage from '../../asset/images/designtop.jpg';

const DesignSecond = () => {
  return (
    <div className="designsecond-container">
      <img src={accessibilityImage} alt="Accessibility" className="accessibility-image" />
      <h1 className="design_second_heading">
        <span className="design_second_highlight">Find and fix accessibility issues</span> <br />in designs 10x faster with AI
      </h1>
      <h4 className="design_second_description">
      57% of accessibility issues originate in the design phase. Sidekick in Stark automatically <br />
      scans Figma or Sketch files and, within seconds, makes suggestions for how to fix the<br />
      accessibility issues – no prior knowledge needed.
      </h4>
      <button className="design_second_get-started-button">Get started for free</button>
    </div>
  );
}

export default DesignSecond;
