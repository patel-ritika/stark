import React from 'react';
import "../../asset/styles/compliance/compliancetop.css";
import complianceImage from '../../asset/images/managerstop.jpeg';


const ComplianceTop = () => {
  return (
    <div className="compliance-top">
    <div className="compliance_top_content">
      <h5>FOR COMPLIANCE MANAGERS</h5>
      <h1>Centralize your<br /> accessibility<br />compliance</h1>
      <h4>
      Managing digital accessibility compliance requires the same<br />
      level of rigor and prioritization as security and privacy. With<br />
      Stark’s Compliance Center, managing your accessibility<br />
      posture and growing your company’s accessibility maturity<br />
      becomes centralized, actionable, automated.
      </h4>
      <div className="compliance_top_button-row">
        <button className="compliance_top_btn-signup">Sign up for free</button>
        <button className="compliance_top_btn-trial">Start a free trial</button>
      </div>
    </div>
    <div className="compliance_top_image-container">
      <img src={complianceImage} alt="Design Illustration" />
    </div>
  </div>
  );
}

export default ComplianceTop;
