import React, {useState} from 'react';
import "../asset/styles/header.css";
import logo from '../asset/images/logo.jpg';
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu and close icon

const Header = () => {
    const [showUseCases, setShowUseCases] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
      <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>

      <nav className={`header-nav ${isMobileMenuOpen ? "show" : ""}`}>
                <ul className="nav-list">
                    <li className="login-link-mobile">LOG IN</li> {/* Mobile-specific login link */}
                    <li 
                        className="nav-item"
                        onMouseEnter={() => setShowUseCases(true)}
                        onMouseLeave={() => setShowUseCases(false)}
                    >
                        USE CASES ▼
                        {showUseCases && (
                            <div className="dropdown-menu">
                                <div className="submenu-column">
                                    <h5>
                                    <a href="/designers" target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>
                                      Designers
                                    </a>
                                    </h5>
                                    <p>Creative accessible designs in record<br />time right in Fgma & Sketch.</p>
                                    <h5>
                                    <a href="/developers" target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>
                                      Developers
                                    </a>
                                    </h5>
                                    <p>Test and audit your code from early<br />implementation to live product.</p>
                                </div>
                                <div className="submenu-column">
                                    <h5>
                                    <a href="/product managers" target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>
                                      Product Managers
                                    </a>
                                    </h5>
                                    <p>Manage accessibility in real-time<br />across all your projects.</p>
                                    <h5>Compliance Managers</h5>
                                    <p>Monitor, manage and audit your<br />accessibility posture in one place.</p>
                                </div>
                            </div>
                        )}
                    </li>
                    <li className="nav-item">PRICING</li>
                    <li className="nav-item">SUPPORT</li>
                    <li 
                        className="nav-item"
                        onMouseEnter={() => setShowResources(true)}
                        onMouseLeave={() => setShowResources(false)}
                    >
                        RESOURCES ▼
                        {showResources && (
                            <div className="dropdown-menu resources-dropdown">
                                <div className="submenu-column">
                                    <h5>Blog</h5>
                                    <p>Read about the latest updates to<br />Stark and articles from our team.</p>
                                    <h5>Library</h5>
                                    <p>Learn about all things accessibility<br />and inclusive design.</p>
                                    <h5>The WCAG Explained</h5>
                                    <p>Simple explanations of every WCAG<br />criteria.</p>
                                </div>
                                <div className="submenu-column">
                                    <h5>Support Center</h5>
                                    <p>Find answers to your questions plus<br />tips and tricks on how to use Stark.</p>
                                    <h5>Community</h5>
                                    <p>Join more than 3,500 accessibility<br />folks from around the world.</p>
                                    <h5>Stark White Paper</h5>
                                    <p>Managing and growing your<br />accessibility posture at any scale.</p>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>

            <div className="header-actions">
                <a href="/login" className="login-link">LOG IN</a>
                <button className="start-trial-button">START FREE TRIAL</button>
            </div>

            <button className="menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu and close icons */}
            </button>
        </header>
  
  );
}

export default Header;
