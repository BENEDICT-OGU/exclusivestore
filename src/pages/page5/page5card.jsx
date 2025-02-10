import React, { useState } from "react";
import "../secondpage/card.css"; // Importing the CSS file for styling

const Card5 = ({ image, name, oldPrice, newPrice, rating, onAddToCart }) => {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleEyeClick = () => {
    setIsCardVisible(false);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    isCardVisible && (
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-image-container">
          <img src={image} alt="Product" className="card-image" />
          <h2>{name}</h2>
          <div className="icons">
            <button className="like-btn" onClick={handleLikeClick}>
              {isLiked ? "❤️" : "🤍"}
            </button><br />
            <button className="eye-btn" onClick={handleEyeClick}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="card-details">
          <div className="price-section">
            {/* <span className="old-price">${oldPrice}</span> */}
            <span className="new-price">₦{newPrice}</span>
          </div>
          <div className="ratings">
            {"⭐".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
        </div>
        {isHovered && (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    )
  );
};

export default Card5;
