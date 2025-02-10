import React, { useState } from 'react';
import './productcard.css'; 

const ProductCard = ({ product, onRemove }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Handle the visibility of the card when eye icon is clicked
  const handleEyeClick = () => {
    setIsVisible(false);
    if (onRemove) {
      onRemove(product.id); // Call the onRemove function passed as a prop
    }
  };

  // Handle the hover effect for showing Add to Cart button
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  // Don't render the component if it's removed
  if (!isVisible) return null;

  return (
    <div
      className="product-card"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="discount-price">{product.discountPrice}</div>
        <div className="product-icons">
          <FaHeart className="like-icon" />
          <FaEye className="eye-icon" onClick={handleEyeClick} />
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">
          <span className="original-price">{product.originalPrice}</span>
          <span className="discount-price">{product.discountPrice}</span>
        </div>
        {isHovered && (
          <button className="add-to-cart">Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
