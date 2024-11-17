import React from 'react';
import "../../asset/styles/home/homethird.css";
import Image1 from '../../asset/images/carbon1.webp'; // replace with actual paths
import Image2 from '../../asset/images/carbon2.webp';
import Image3 from '../../asset/images/carbon3.webp';
import Image4 from '../../asset/images/carbon4.webp';

const HomeThird = () => {
  return (
    <div className="homeThird-container">
    <h2 className="homeThird-title">EXPLORE THE STARK PLATFORM</h2>
    <h1 className="homeThird-subtitle">
        The only <span className="homethird_highlight">end-to-end solution<br /></span> from design and code to live product
    </h1>
    <div className="homeThird-parts">
        <div className="part">
            <img src={Image1} alt="Part 1" className="part-image" />
            <h5 className="part-heading">SPEED UP DESIGN & DEV</h5>
            <h4 className="part-subheading">Plug-ins &<br/>
            Integrations</h4>
            <p className="part-paragraph">
            Meet your team where they<br />
            work, from Figma and<br />
            Sketch to GitHub and their<br />
            browser of choice. An<br />
            accessibility workflow built<br />
            right into the tools they<br />
            love. No need for them to<br />
            switch or relearn.
            </p>
        </div>
        <div className="part">
            <img src={Image2} alt="Part 2" className="part-image" />
            <h5 className="part-heading">IMPROVE COLLABORATION</h5>
            <h4 className="part-subheading">Projects, Reports<br />
            & Insights</h4>
            <p className="part-paragraph">
            Manage your team’s<br />
            accessibility workflow in the<br />
            Stark Web app. Monitor and<br />
            manage progress with real-<br />
            time reports and insights<br />
            across all your projects<br />
            from design to code.
            </p>
        </div>
        <div className="part">
            <img src={Image3} alt="Part 3" className="part-image" />
            <h5 className="part-heading">ACCELERATE WORKFLOWS</h5>
            <h4 className="part-subheading">AI-powered<br />
            Automation</h4>
            <p className="part-paragraph">
            Automated continuous<br />
            scanning of design files and<br />
            code repositories combined<br />
            with AI-powered<br />
            suggestions accelerates<br />
            finding and fixing of<br />
            accessibility issues in<br />
            record time.
            </p>
        </div>
        <div className="part">
            <img src={Image4} alt="Part 4" className="part-image" />
            <h5 className="part-heading">MANAGE AT SCALE</h5>
            <h4 className="part-subheading">Compliance<br />
            Center</h4>
            <p className="part-paragraph">
            Manage your company’s<br />
            accessibility posture in one<br />
            central hub. Assign and<br />
            document individual<br/>
            controls based on the<br />
            regulatory frameworks.<br />
            Access evidence for easy<br/>
            auditing.
            </p>
        </div>
    </div>
    <button className="homeThird-button">Get started for free</button>
</div>
  );
}

export default HomeThird;
