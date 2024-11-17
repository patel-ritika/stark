import React, {useEffect, useRef} from 'react';
import "../../asset/styles/home/homefall.css";
import fall1 from '../../asset/images/fall1.png';
import fall2 from '../../asset/images/fall2.png';
import fall3 from '../../asset/images/fall3.webp';

const HomeFall = () => {
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
    <div className="homefall-container">
    <div className="fall_image-row">
      <img ref={(el) => (imagesRef.current[0] = el)} src={fall1} alt="Image 1" className="fall_scroll-image" />
      <img ref={(el) => (imagesRef.current[1] = el)} src={fall2} alt="Image 2" className="fall_scroll-image" />
      <img ref={(el) => (imagesRef.current[2] = el)} src={fall3} alt="Image 3" className="fall_scroll-image" />
    </div>
    <h1>
      Built to <span className="fall_highlight">deliver business value</span>,<br /> loved by the community
    </h1>
    <h4>
    Stark is the only Continuous Accessibility platform that accelerates time-to-<br />
    compliance from design and code to QA and PM, and helps companies of all sizes <br />
    deliver highest quality experiences for all users.
    </h4>
  </div>
  );
}

export default HomeFall;
