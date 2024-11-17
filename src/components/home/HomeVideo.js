import React, {useEffect, useRef} from 'react';
import "../../asset/styles/home/homevideo.css";
import img1 from '../../asset/images/video1.png';
import img2 from '../../asset/images/video2.png';
import img3 from "../../asset/images/video3.png";
import img4 from "../../asset/images/video4.png";
import img5 from "../../asset/images/video5.png";
import img6 from "../../asset/images/video6.png";
import img7 from "../../asset/images/video7.jpg";
import img8 from "../../asset/images/video8.png";
import img9 from "../../asset/images/video9.png";
import img10 from "../../asset/images/video10.png";
import img11 from "../../asset/images/video11.png";
import img12 from "../../asset/images/video12.png";
import img13 from "../../asset/images/video13.png";
import img14 from "../../asset/images/video14.jpg";
import img15 from "../../asset/images/video15.jpg";
import img16 from "../../asset/images/video16.png";
import img17 from "../../asset/images/video17.webp";
import img18 from "../../asset/images/video18.png";
import img19 from "../../asset/images/video19.jpg";
import img20 from "../../asset/images/video20.svg";
import img21 from "../../asset/images/video21.webp";
import img22 from "../../asset/images/video22.jpg";
const HomeVideo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust speed as per requirement
    const scrollImages = () => {
      if (containerRef.current) {
        scrollAmount += scrollSpeed;
        containerRef.current.scrollLeft = scrollAmount;
        if (scrollAmount >= containerRef.current.scrollWidth / 2) {
          scrollAmount = 0;
        }
        requestAnimationFrame(scrollImages);
      }
    };
    scrollImages();
  }, []); 

  return (
    <div className="homevideo">
    <h1>
      Speed up your accessibility<br /> workflow{' '}
      <span className="highlight">from months to minutes</span>
    </h1>
    <h3>
    Designers, developers, product managers, and accessibility experts at 30,000+<br />
    companies use Stark’s suite of integrated accessibility tools in their daily product<br />
    development cycle. Join them today!
    </h3>
    <div className="image-container" ref={containerRef}>
      {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22].map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  </div>
  );
}

export default HomeVideo;
