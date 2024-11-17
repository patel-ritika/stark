import React from 'react';
import "../../asset/styles/home/hometools.css";
import tools from '../../asset/images/tools.webp';

const HomeTools = () => {
  return (
    <div className="hometools-container">
      <img src={tools} alt="Center Image" className="tools_center-image" />
      <h1 className="tools_highlight-text">
        <span className="tools_highlight">Integrated into the tools<br /></span> you already use
      </h1>
      <h4 className="tools_description">
      Whether it's Figma or Sketch, your favorite web browser, or even GitHub and beyond, <br />
      Stark integrates into the tools your team already uses for maximum efficiency and no<br />
      learning curve. Our AI-powered integrations help your teammates find and fix <br />
      accessibility issues as early as the first designs and all across the development cycle.
      </h4>
      <button className="tools_get-started-button">Get started for free</button>
    </div>
  );
}

export default HomeTools;
