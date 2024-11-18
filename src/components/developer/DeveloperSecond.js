import React from 'react';
import "../../asset/styles/developer/developersecond.css";
import developsecondImage from '../../asset/images/developsecond.webp';

const DeveloperSecond = () => {
  return (
    <div className="developsecond-container">
      <img src={developsecondImage} alt="Accessibility" className="developsecond-image" />
      <h1 className="develop_second_heading">
        <span className="develop_second_highlight">Advanced dev tooling</span> that takes <br />your accessibility up a notch
      </h1>
      <h4 className="develop_second_description">
      Whether you’re testing on staging or production, Stark enables you to scan for <br />
      accessibility issues directly in the browser. With code highlighting for issues, live<br />
      preview to test fixes, and lightning fast WCAG audits, it’s a web dev powerhouse.
      </h4>
      <button className="develop_second_get-started-button">Get started for free</button>
    </div>
  );
}

export default DeveloperSecond;
