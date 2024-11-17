import React from 'react';
import "../../asset/styles/home/homegrade.css";
import grade from "../../asset/images/grade.webp";

const HomeGrade = () => {
  return (
    <div className="homegrade-container">
    <img src={grade} alt="Center Image" className="grade-image" />
    <h1 className="homegrade_title">
      <span className="homegrade_highlight">An enterprise-grade platform</span> <br />you can trust
    </h1>
    <h4 className="homegrade_description">
    The entire Stark platform and all our integrations are built with enterprise-grade<br />
    security. From SSO and our fully GDPR / SOC2-certified platform to our zero-trust<br />
    policy that underpins all our tool integrations, we ensure maximum security and<br />
    privacy for our customers’ data and IP.
    </h4>
    <button className="homegrade_start-trial-button">Start a free trial</button>
  </div>
  );
}

export default HomeGrade;
