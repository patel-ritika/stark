import React from 'react';
import "../../asset/styles/support/supportsecond.css";

const SupportSecond = () => {
  return (
    <div className="support-second-container">
      {/* Left Side List */}
      <div className="support_left-list">
        <ul>
          <li>Getting Started</li>
          <li>Accounts</li>
          <li>Subscriptions and Billing</li>
          <li>Teams</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Right Side Boxes */}
      <div className="support_right-content">
        <div className="support_content-box">
          <h1>Getting Started</h1>
          <h4>Learn how to install and use Stark's features.</h4>
        </div>
        <div className="support_content-box">
          <h1>Accounts</h1>
          <h4>Learn about your account and how to manage your passwords<br/>and emails.</h4>
        </div>
        <div className="support_content-box">
          <h1>Subscriptions and Billing</h1>
          <h4>Learn about pricing plans and managing your subscription.</h4>
        </div>
        <div className="support_content-box">
          <h1>Teams</h1>
          <h4>Learn how to getting started with and manage your Stark Team<br/>Plan.</h4>
        </div>
        <div className="support_content-box">
          <h1>Privacy</h1>
          <h4>Learn about cookies, legal terms, and security.</h4>
        </div>
        <div className="support_content-box">
          <h1>Contact Us</h1>
          <h4>Didn't find what you're looking for? Contact us in these places!</h4>
        </div>
      </div>
    </div>

  );
}

export default SupportSecond;
