import React, {useEffect, useRef} from 'react';
import "../../asset/styles/design/designfall.css";
import designfall1 from '../../asset/images/fall1.png';
import designfall2 from '../../asset/images/fall2.png';
import designfall3 from '../../asset/images/fall3.webp';


const DesignFall = () => {
    const imagesRef = useRef([]);

    // Scroll effect function
    useEffect(() => {
      const handleScroll = () => {
        imagesRef.current.forEach((img, index) => {
          const scrollPos = window.scrollY;
          img.style.transform = `translateY(${Math.min(scrollPos * 0.2 * (index + 1), 100)}px)`;
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className="designfall-container">
    <div className="designfall_image-row">
      <img ref={(el) => (imagesRef.current[0] = el)} src={designfall1} alt="Image 1" className="fall_scroll-image" />
      <img ref={(el) => (imagesRef.current[1] = el)} src={designfall2} alt="Image 2" className="fall_scroll-image" />
      <img ref={(el) => (imagesRef.current[2] = el)} src={designfall3} alt="Image 3" className="fall_scroll-image" />
    </div>
    <h1>
      Built to <span className="designfall_highlight">deliver business value</span>,<br /> loved by the community
    </h1>
    <h4>
    Stark is the only Continuous Accessibility platform that accelerates time-to-<br />
    compliance from design and code to QA and PM, and helps companies of all sizes <br />
    deliver highest quality experiences for all users.
    </h4>
  </div>
  );
}

export default DesignFall;
