import React, {useState} from 'react';
import "../../asset/styles/home/homeback.css";
import DesignerImg from '../../asset/images/scale1.webp';
import DeveloperImg from '../../asset/images/scale2.webp';
import ProductManagerImg from '../../asset/images/scale3.webp';
import ComplianceManagerImg from '../../asset/images/scale4.webp';

const HomeBack = () => {
  const [hoveredImage, setHoveredImage] = useState(DesignerImg);

  // Function to handle hover over h4 elements
  const handleHover = (image) => {
    setHoveredImage(image);
  };

  return (
    <div className="homeback-container">
      {/* Image on the left side */}
       <img src={hoveredImage} alt="Hover Display" className="homeback_hover-image" />

      {/* Text content on the right side */}
      <div className="homeback_text-content">
        <h5>Streamlining workflows, consolidating tools</h5>
        <h1>
          We scale with you <span className="homeback_highlight"> <br />across departments</span>
        </h1>

        {/* Section for each role */}
        <div className="homeback_role-section">
          <h4 onMouseEnter={() => handleHover(DesignerImg)} >Designers</h4>
          <p>Create accessible designs in record time right in Figma, Sketch, and Adobe XD.</p>

          <h4 onMouseEnter={() => handleHover(DeveloperImg)} >Developers</h4>
          <p>Test and audit your from early implementation to live product.</p>

          <h4 onMouseEnter={() => handleHover(ProductManagerImg)} >Product Managers</h4>
          <p>Manage accessibility in real - time across al your projects.</p>

          <h4 onMouseEnter={() => handleHover(ComplianceManagerImg)} >Compliance Managers</h4>
          <p>Moonitor, manage and audit your accessibility posture in one place.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeBack;
