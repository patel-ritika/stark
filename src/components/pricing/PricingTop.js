import React from 'react';
import "../../asset/styles/pricing/pricingtop.css";
import { FaCheckCircle } from 'react-icons/fa';

const PricingTop = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Pricing Plans</h1>
      <h4 className="pricing-subtitle">Whether you’re a small but mighty team, or 100,000 strong, we’ve got a plan<br />
       to support what you need. Sign up and get started today.</h4>

      <div className="pricing-buttons">
        <button className="btn-teams">Teams/Organizations</button>
        <button className="btn-individuals">Individuals</button>
      </div>

      <div className="pricing-boxes">
        {/* First Box: Starter */}
        <div className="pricing-box">
          <h4>Starter</h4>
          <h5>For teams with an early program in<br />need of basic accessibility checks.</h5>
          <h1>Free</h1>
          <h5>Forever</h5>
          <button className="box-button offwhite-hover">Create a free account</button>
          <ul className="features-list">
            <li><FaCheckCircle /> Limited roles and permissions</li>
            <li><FaCheckCircle /> shared team projects</li>
            <li><FaCheckCircle /> Manual scans and reports</li>
            <li><FaCheckCircle /> Supported assets: Figma, code<br />repos, public URLs</li>
            <li><FaCheckCircle /> Monitor up to 5 pages</li>
            <li><FaCheckCircle /> 14-day report data storage</li>
            <li><FaCheckCircle /> Limited access to tooling in<br/>Figma and browser</li>
          </ul>
        </div>

        {/* Second Box: Launch */}
        <div className="pricing-box">
          <h4>Launch</h4>
          <h5>For smaller teams getting started<br /> with accessibility collaboration.</h5>
          <h5>From</h5>
          <h1>$2,500</h1>
          <h5>per year</h5>
          <button className="box-button blue-hover">Start a free trial</button>
          <ul className="features-list">
            <li><FaCheckCircle /> 3 editors included</li>
            <li><FaCheckCircle /> 25 viewers included</li>
            <li><FaCheckCircle /> Shared team projects</li>
            <li><FaCheckCircle /> Weekly automated scans and<br />reports</li>
            <li><FaCheckCircle /> Supported assets:Figma, code<br />repos, public URLs</li>
            <li><FaCheckCircle /> Monitor up to 100 pages</li>
            <li><FaCheckCircle /> 30-day report data storage</li>
            <li><FaCheckCircle /> Consolidated billing</li>
            <li><FaCheckCircle /> Full access to automated<br />detection and remediation<br/>tooling in design and code</li>
          </ul>
        </div>
{/* Third Box: Grow */}
<div className="pricing-box">
          <h4>Grow</h4>
          <h5>For larger teams needing to comply<br /> with confidence end-to-end.</h5>
          <h5>From</h5>
          <h1>$6,000</h1>
          <h5>per year</h5>
          <button className="box-button blue-hover">Talk to Sales</button>
          <ul className="features-list">
            <li><FaCheckCircle /> 10 editors included</li>
            <li><FaCheckCircle /> 50 viewers included</li>
            <li><FaCheckCircle /> Unlimited team projects</li>
            <li><FaCheckCircle /> Daily scans and insight reports</li>
            <li><FaCheckCircle /> Supported assets: Figma, code<br/>repos, CI/CD, public and<br />private URLs</li>
            <li><FaCheckCircle /> Monitor up to 1000 pages</li>
            <li><FaCheckCircle /> 180-day system integration</li>
            <li><FaCheckCircle /> Ticketing system integration</li>
            <li><FaCheckCircle /> Compliance Center to manage<br/>accessibility posture</li>
            <li><FaCheckCircle /> Centralized team admin with<br />SSO</li>
            <li><FaCheckCircle /> Consolidated billing</li>
            <li><FaCheckCircle /> Full access to automated<br/>detection and remediation<br/>tooling in design and code</li>
          </ul>
        </div>

        {/* Fourth Box: Scale */}
        <div className="pricing-box">
          <h4>Scale</h4>
          <h5>For organizations with custom<br /> accessibility and compliance needs.</h5>
          <h5>From</h5>
          <h1>$15,000</h1>
          <h5>per year</h5>
          <button className="box-button offwhite-hover">Talk to Sales</button>
          <ul className="features-list">
            <li><FaCheckCircle /> 20 editors included</li>
            <li><FaCheckCircle /> Unlimited viewers</li>
            <li><FaCheckCircle /> Unlimited team projects</li>
            <li><FaCheckCircle /> Real-time scans and insights<br/> reports</li>
            <li><FaCheckCircle /> Supported assets: Figma, code <br/>repos, CI/CD, public and<br/> private URLs</li>
            <li><FaCheckCircle /> Monitor up to 7500 pages</li>
            <li><FaCheckCircle /> 365-day report data storage</li>
            <li><FaCheckCircle /> Ticketing system integration</li>
            <li><FaCheckCircle /> Compliance Center to manage<br/> accessibility posture</li>
            <li><FaCheckCircle /> Multi-team support</li>
            <li><FaCheckCircle /> Centralized team admin with<br/> SSO and SCIM</li>
            <li><FaCheckCircle /> Customizable terms and<br/> security reviews</li>
            <li><FaCheckCircle /> Priority support and dedicated<br/> account manager</li>
            <li><FaCheckCircle /> Enterprise-grade security,<br/> SOC2 and GDPR certified</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricingTop;
