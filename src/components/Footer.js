import React from 'react';
import "../asset/styles/footer.css";
import { FaTwitter, FaInstagram, FaSlack, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
    {/* Top section with 4 columns */}
    <div className="footer-section">
      <div className="footer-column">
        <h6>USE CASES</h6>
        <ul>
          <li>For Designers</li>
          <li>For Developers</li>
          <li>For Product Managers</li>
          <li>For Compliance Managers</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6>RESOURCES</h6>
        <ul>
          <li>Blog</li>
          <li>Library</li>
          <li>Release Notes</li>
          <li>Slack Community</li>
          <li>WCAG Compliance</li>
          <li>Section 508 Compliance</li>
          <li>European Accessibility Act (EAA)</li>
          <li>Compliance</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6>HELP</h6>
        <ul>
          <li>My Account</li>
          <li>Support Docs</li>
          <li>Contact Us</li>
          <li>Feature Requests</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6>COMPANY</h6>
        <ul>
          <li>Stark Framework</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </div>

    {/* Middle section with 3 columns */}
    <div className="footer-section">
      <div className="footer-column">
        <h6>SECURITY</h6>
        <ul>
          <li>Security Overview</li>
          <li>Cookie Policy</li>
          <li>GDPR</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6>DESIGN INTEGRATIONS</h6>
        <ul>
          <li>Stark for Figma</li>
          <li>Stark for FigJam</li>
          <li>Stark for Sketch</li>
          <li>Stark for Adobe XD</li>
        </ul>
      </div>
      <div className="footer-column">
        <h6>DEVELOPER INTEGRATIONS</h6>
        <ul>
          <li>Stark for Chrome</li>
          <li>Stark for Firefox</li>
          <li>Stark for Edge</li>
          <li>Stark for Safari</li>
          <li>Stark for Arc</li>
          <li>Stark for Brave</li>
        </ul>
      </div>
    </div>

    {/* Bottom section with social icons and footer text */}
    <div className="footer-bottom">
      <div className="social-icons">
        <FaTwitter />
        <FaInstagram />
        <FaSlack />
        <FaLinkedin />
        <FaYoutube />
      </div>
      <h5 className="footer-text">
        MADE REMOTELY WITH LOVE BY STARK LAB, INC. © 2023
      </h5>
    </div>
  </footer>
  );
}

export default Footer;
