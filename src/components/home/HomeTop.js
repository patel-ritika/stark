import React from 'react';
import "../../asset/styles/home/hometop.css";
import sampleImage from '../../asset/images/homeredesign.png';

const HomeTop = () => {
    
  return (
    <div className="home-top">
      <h1>Supercharge
      <br />
      Accessibility</h1>
      <h3>The world's best companies - from startups to the Fortune 100 -<br />
      trust Stark to accelerate time to digital accessibility compliance.</h3>
      <button className="signup-button">Sign up for free</button>
      <img src={sampleImage} alt="Decorative" className="decorative-image" />
    </div>
  );
}

export default HomeTop;
