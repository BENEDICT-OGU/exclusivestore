// Carousel.js
import React, { useState, useEffect } from "react";
import "./heropage.css"; // Assuming you are using your own styles

const images = [
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_6/Mobile_accesories/DesktopgSlide712x384.png",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Global-mini-Campaigns/Week-3/update/DesktopHomepageSlider_712x384_fashion_meet_fashion.jpg",
  "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/02Feb/Nivea/jumia-slider.jpg",
  "https://images.unsplash.com/photo-1691534986134-cac9b2db495f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtZWluZyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1726828501829-9188cde81755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGlwaG9uZSUyMDE2fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1726828583662-f91f7794793a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGlwaG9uZSUyMDE2fGVufDB8fDB8fHww",
  "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1149035726/photo/white-t-shirt-on-a-young-man-isolated-on-white-background-front-and-back-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ad8y5_2w9aBJF83pxP_HrKHlCxdQGNRpN6-WjxSguy8=",
];

function HeroPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image automatically every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 10 seconds interval

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to change image on click of dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero">
      <div className="option">
        <div><a href="">womens fashion</a></div>
        <div><a href="">men's fashion</a></div>
        <div><a href="">electronics</a></div>
        <div><a href="">home & lifestyle</a></div>
        <div><a href="">medicine</a></div>
        <div><a href="">sports & outdoor</a></div>
        <div><a href="">baby's & toys</a></div>
        <div><a href="">groceries</a></div>
        <div><a href="">health & beauty</a></div>
      </div>
      <div className="carousel">
        <div className="image-container">
          <img src={images[currentIndex]} alt={`carousel ${currentIndex}`} />
        </div>
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
