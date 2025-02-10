// Carousel.js
import React, { useState, useEffect } from "react";
import "./page6.css"; 

const images = [
  "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1558050032-160f36233a07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGtleWJvYXJkfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1726828501829-9188cde81755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGlwaG9uZSUyMDE2fGVufDB8fDB8fHww",
  "https://ng.jumia.is/cms/0-1-initiatives/Magic-hour/2025/February/572X250-1.jpg",
  "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/shoes-bewlow-9999/572x250.png",
  "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1149035726/photo/white-t-shirt-on-a-young-man-isolated-on-white-background-front-and-back-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ad8y5_2w9aBJF83pxP_HrKHlCxdQGNRpN6-WjxSguy8=",
];

function Page6() {
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
      <div className="carousell">
        <div className="image-containerr">
          <img src={images[currentIndex]} alt={`carousel ${currentIndex}`} />
        </div>
        <div className="dots-container">
          {/* {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Page6;
