import React from 'react';
import "../../asset/styles/home/homefive.css";
import blue1 from '../../asset/images/velocity.webp'; // Replace with your image path
import blue2 from '../../asset/images/accelerate.webp';
import blue3 from '../../asset/images/reduce.webp';
import blue4 from '../../asset/images/risk.webp';

const HomeFive = () => {
  return (
    <div className="homefive-container">
      <h5>WHY STARK?</h5>
      <h1>Build and ship inclusive software,<br /> accelerate time-to-compliance.</h1>
      
      <div className="homefive_content-row">
        <div className="homefive_content-column">
          <img src={blue1} alt="Left Image 1" />
          <h4>Increase Velocity</h4>
          <p>Stark is the only end-to-end platform that helps your<br />
          team find and fix accessibility issues from design and<br />
          code to the live product. All this, while being up to 10x<br />
          faster than any other tool in the market.</p>
        </div>
        
        <div className="homefive_content-column">
          <img src={blue2} alt="Right Image 1" />
          <h4>Accelerate Compliance</h4>
          <p>Reports and Insights are available in real-time for every<br />
          project in Stark. Plus, time-stamped historic reports are<br />
          available at any time for up-to-date compliance<br />
          reporting across departments.</p>
        </div>
        
        <div className="homefive_content-column">
          <img src={blue3} alt="Left Image 2" />
          <h4>Reduce Cost</h4>
          <p>Stark’s fully integrated solution enables fixing of<br />
          accessibility issues as early as first design drafts,<br />
          reducing 56% of issues that typically make it into code<br />
          where remediation costs can be up 100x higher.</p>
        </div>
        
        <div className="homefive_content-column">
          <img src={blue4} alt="Right Image 2" />
          <h4>Mitigate Risk</h4>
          <p>The entire Stark platform and all our integrations are<br />
          built with enterprise-grade security. From SSO and our<br />
          fully SOC2-certified platform stack to our zero-trust<br />
           policy that underpins all our tool .</p>
        </div>
      </div>
    </div>
  );
}

export default HomeFive;
