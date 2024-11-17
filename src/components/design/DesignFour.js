import React from 'react';
import "../../asset/styles/design/designfour.css";
import designfourImage from '../../asset/images/team.webp';

const DesignFour = () => {
  return (
    <div className="designfour-container">
      <img src={designfourImage} alt="Accessibility" className="designfour-image" />
      <h1 className="design_four_heading">
        <span className="design_four_highlight">Real-time reports and insights</span> <br />to keep your projects on track
      </h1>
      <h4 className="design_four_description">
      Real-time accessibility reports and insights of your design files and code repos<br />
      streamline collaboration across departments in one place. Managing accessibility at<br />
      scale without slowing down your team’s velocity just got rocket fuel added to it.
      </h4>
      <button className="design_four_get-started-button">Get started for free</button>
    </div>
  );
}

export default DesignFour;
