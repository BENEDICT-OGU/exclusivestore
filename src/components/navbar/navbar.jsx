import React, { useState } from "react";
import "./navbar.css";
import ProductCard from "../itemcard/productcard/productcard";

const NavBar = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Cart items state
  // const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Add item to the cart
  };

  const toggleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
    setAnimate(true);

    setTimeout(() => setAnimate(false), 300);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen); // Toggle cart modal visibility
  };

  const toggleMenuModal = () => {
    setIsMenuModalOpen(!isMenuModalOpen);
  };
  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]); // Add item to cart
  // };

  return (
    <nav>
      <h1>EXCLUSIVE</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
      </ul>
      

      <span className="span-sign-cart-like">
        {isLoggedIn ? (
          <p className="username">{`Welcome, ${username}`}</p>
        ) : (
          <p
            className="sign-in"
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
          >
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49969 6C7.29534 6 8.05841 5.68393 8.62102 5.12132C9.18362 4.55871 9.49969 3.79565 9.49969 3C9.49969 2.20435 9.18362 1.44129 8.62102 0.87868C8.05841 0.316071 7.29534 0 6.49969 0C5.70405 0 4.94098 0.316071 4.37837 0.87868C3.81577 1.44129 3.49969 2.20435 3.49969 3C3.49969 3.79565 3.81577 4.55871 4.37837 5.12132C4.94098 5.68393 5.70405 6 6.49969 6ZM8.49969 3C8.49969 3.53043 8.28898 4.03914 7.91391 4.41421C7.53884 4.78929 7.03013 5 6.49969 5C5.96926 5 5.46055 4.78929 5.08548 4.41421C4.71041 4.03914 4.49969 3.53043 4.49969 3C4.49969 2.46957 4.71041 1.96086 5.08548 1.58579C5.46055 1.21071 5.96926 1 6.49969 1C7.03013 1 7.53884 1.21071 7.91391 1.58579C8.28898 1.96086 8.49969 2.46957 8.49969 3ZM12.4997 11C12.4997 12 11.4997 12 11.4997 12H1.49969C1.49969 12 0.499695 12 0.499695 11C0.499695 10 1.49969 7 6.49969 7C11.4997 7 12.4997 10 12.4997 11ZM11.4997 10.996C11.4987 10.75 11.3457 10.01 10.6677 9.332C10.0157 8.68 8.78869 8 6.49969 8C4.20969 8 2.98369 8.68 2.33169 9.332C1.65369 10.01 1.50169 10.75 1.49969 10.996H11.4997Z"
                fill="#23A6F0"
              />
            </svg>
            Login / Register
          </p>
        )}

        <p onClick={toggleSearch} style={{ cursor: "pointer" }}>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2426 10.3441C13.2109 9.02279 13.6446 7.38459 13.4569 5.75725C13.2692 4.12991 12.474 2.63344 11.2304 1.56723C9.98671 0.501022 8.38634 -0.0562959 6.74943 0.00677721C5.11252 0.0698504 3.55978 0.748663 2.40186 1.90741C1.24394 3.06615 0.566243 4.61938 0.504341 6.25633C0.44244 7.89329 1.0009 9.49326 2.068 10.7361C3.1351 11.979 4.63214 12.7732 6.25961 12.9597C7.88709 13.1462 9.52497 12.7113 10.8456 11.7421H10.8446C10.8746 11.7821 10.9066 11.8201 10.9426 11.8571L14.7926 15.7071C14.9801 15.8947 15.2345 16.0002 15.4997 16.0003C15.765 16.0004 16.0195 15.8951 16.2071 15.7076C16.3947 15.5201 16.5002 15.2657 16.5003 15.0005C16.5004 14.7352 16.3951 14.4807 16.2076 14.2931L12.3576 10.4431C12.3218 10.4069 12.2834 10.3735 12.2426 10.3431V10.3441ZM12.5006 6.5001C12.5006 7.22237 12.3583 7.93757 12.0819 8.60486C11.8055 9.27215 11.4004 9.87847 10.8897 10.3892C10.379 10.8999 9.77264 11.305 9.10535 11.5814C8.43806 11.8578 7.72286 12.0001 7.00059 12.0001C6.27832 12.0001 5.56312 11.8578 4.89583 11.5814C4.22854 11.305 3.62223 10.8999 3.11151 10.3892C2.60078 9.87847 2.19566 9.27215 1.91926 8.60486C1.64285 7.93757 1.50059 7.22237 1.50059 6.5001C1.50059 5.04141 2.08006 3.64246 3.11151 2.61101C4.14296 1.57956 5.5419 1.0001 7.00059 1.0001C8.45928 1.0001 9.85823 1.57956 10.8897 2.61101C11.9211 3.64246 12.5006 5.04141 12.5006 6.5001Z"
              fill="#23A6F0"
            />
          </svg>
        </p>

        {/* Cart Icon */}
        <p
          className="cart"
          onClick={toggleCartModal}
          style={{ cursor: "pointer" }}
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.500305 0.5C0.500305 0.367392 0.552984 0.240215 0.646752 0.146447C0.74052 0.0526784 0.867697 0 1.00031 0H2.50031C2.61184 3.08115e-05 2.72016 0.0373507 2.80804 0.106025C2.89592 0.174699 2.95831 0.270784 2.98531 0.379L3.39031 2H15.0003C15.0737 2.00007 15.1462 2.0163 15.2127 2.04755C15.2791 2.0788 15.3378 2.12429 15.3847 2.1808C15.4316 2.23731 15.4654 2.30345 15.4838 2.37452C15.5023 2.44558 15.5048 2.51984 15.4913 2.592L13.9913 10.592C13.9699 10.7066 13.909 10.8101 13.8194 10.8846C13.7297 10.9591 13.6169 10.9999 13.5003 11H4.50031C4.38374 10.9999 4.27087 10.9591 4.18122 10.8846C4.09156 10.8101 4.03075 10.7066 4.00931 10.592L2.51031 2.607L2.11031 1H1.00031C0.867697 1 0.74052 0.947322 0.646752 0.853553C0.552984 0.759785 0.500305 0.632608 0.500305 0.5ZM3.60231 3L4.91531 10H13.0853L14.3983 3H3.60231ZM5.50031 11C4.96987 11 4.46116 11.2107 4.08609 11.5858C3.71102 11.9609 3.50031 12.4696 3.50031 13C3.50031 13.5304 3.71102 14.0391 4.08609 14.4142C4.46116 14.7893 4.96987 15 5.50031 15C6.03074 15 6.53945 14.7893 6.91452 14.4142C7.28959 14.0391 7.50031 13.5304 7.50031 13C7.50031 12.4696 7.28959 11.9609 6.91452 11.5858C6.53945 11.2107 6.03074 11 5.50031 11ZM12.5003 11C11.9699 11 11.4612 11.2107 11.0861 11.5858C10.711 11.9609 10.5003 12.4696 10.5003 13C10.5003 13.5304 10.711 14.0391 11.0861 14.4142C11.4612 14.7893 11.9699 15 12.5003 15C13.0307 15 13.5394 14.7893 13.9145 14.4142C14.2896 14.0391 14.5003 13.5304 14.5003 13C14.5003 12.4696 14.2896 11.9609 13.9145 11.5858C13.5394 11.2107 13.0307 11 12.5003 11ZM5.50031 12C5.76552 12 6.01988 12.1054 6.20741 12.2929C6.39495 12.4804 6.50031 12.7348 6.50031 13C6.50031 13.2652 6.39495 13.5196 6.20741 13.7071C6.01988 13.8946 5.76552 14 5.50031 14C5.23509 14 4.98073 13.8946 4.7932 13.7071C4.60566 13.5196 4.50031 13.2652 4.50031 13C4.50031 12.7348 4.60566 12.4804 4.7932 12.2929C4.98073 12.1054 5.23509 12 5.50031 12ZM12.5003 12C12.7655 12 13.0199 12.1054 13.2074 12.2929C13.3949 12.4804 13.5003 12.7348 13.5003 13C13.5003 13.2652 13.3949 13.5196 13.2074 13.7071C13.0199 13.8946 12.7655 14 12.5003 14C12.2351 14 11.9807 13.8946 11.7932 13.7071C11.6057 13.5196 11.5003 13.2652 11.5003 13C11.5003 12.7348 11.6057 12.4804 11.7932 12.2929C11.9807 12.1054 12.2351 12 12.5003 12Z"
              fill="#23A6F0"
            />
          </svg>
        </p>

        <p
          className={`like-icon ${animate ? "explode" : ""}`}
          onClick={toggleLike}
          style={{ cursor: "pointer" }}
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 2.748L7.783 2.011C6.1 0.281 3.014 0.878 1.9 3.053 1.377 4.076 1.259 5.553 2.214 7.438 3.134 9.253 5.048 11.427 8.5 13.795 11.952 11.427 13.865 9.253 14.786 7.438 15.741 5.552 15.624 4.076 15.1 3.053 13.986 0.878 10.9 0.28 9.217 2.01L8.5 2.748Z"
              fill={liked ? "red" : "white"} // Fills inside when clicked
              stroke="skyblue"
              strokeWidth="1.5"
            />
          </svg>
          {likes}
        </p>
      </span>
      <button className="menu-button" onClick={toggleMenuModal}>≡</button>
      {showSearch && (
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      )}

      {/* Sign Up Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Sign Up</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(e.target.username.value);
              }}
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button type="submit">Sign Up</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Cart Modal - Sliding Effect */}
      <div className={`cart-modal ${isCartModalOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={toggleCartModal} className="close-modal">
            X
          </button>
        </div>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cart-footer">
          <button>Proceed to Checkout</button>
        </div>
      </div>


      <div className={`menu-modal ${isMenuModalOpen ? "open" : ""}`}>
        <div className="menu-header">
          <button onClick={toggleMenuModal} className="close-modal">
            X
          </button>
        </div>
        
        <div className="menu-ul">
        <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
