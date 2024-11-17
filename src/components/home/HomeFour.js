import React from 'react';
import "../../asset/styles/home/homefour.css";
import team from '../../asset/images/team.webp';

const HomeFour = () => {
  return (
    <div className="homefour-container">
    <img src={team} alt="Center Image" className="center-image" />
    <h1 className="homefour_title">
      <span className="homefour_highlight">Continuous Accessibility</span> <br />for your entire team
    </h1>
    <h4 className="homefour_description">
    Get real-time reports that help manage accessibility at scale without slowing down<br />
    the velocity of your team. Stark gives your up-to-date insights into the accessibility of<br />
    all your design files, code repositories and live sites or applications, all in one central<br />
    place for efficient collaboration across departments.
    </h4>
    <button className="homefour_start-trial-button">Start a free trial</button>
  </div>
  );
}

export default HomeFour;
