import React, { useState, useEffect } from "react";
import "./navbar.css";

const NavBar = () => {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [authError, setAuthError] = useState("");

  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Sample products
  const products = [
    {
      id: 1,
      name: "Minimalist Chair",
      price: 349,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Leather Portfolio",
      price: 199,
      image: "https://images.unsplash.com/photo-1542643408-57d7aed70b48?ixlib=rb-4.0.3"
    }
  ];

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem("ecommerceUser");
    const savedCart = localStorage.getItem("ecommerceCart");
    const savedDarkMode = localStorage.getItem("ecommerceDarkMode");

    if (savedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(savedUser));
    }

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    if (savedDarkMode) {
      setDarkMode(savedDarkMode === "true");
      document.body.classList.toggle("dark-mode", savedDarkMode === "true");
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("ecommerceCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("ecommerceDarkMode", newDarkMode.toString());
    document.body.classList.toggle("dark-mode", newDarkMode);
  };

  // Handle auth form input changes
  const handleAuthInputChange = (e) => {
    const { name, value } = e.target;
    setAuthForm({
      ...authForm,
      [name]: value
    });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError("");

    // Basic validation
    if (!authForm.email || !authForm.password) {
      setAuthError("Please fill in all fields");
      return;
    }

    // In a real app, you would call your API here
    // For demo purposes, we'll just simulate a successful login
    const user = {
      name: "Demo User",
      email: authForm.email
    };

    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem("ecommerceUser", JSON.stringify(user));
    setAuthModalOpen(false);
    setAuthForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    setAuthError("");

    // Basic validation
    if (!authForm.name || !authForm.email || !authForm.password) {
      setAuthError("Please fill in all fields");
      return;
    }

    if (authForm.password !== authForm.confirmPassword) {
      setAuthError("Passwords don't match");
      return;
    }

    // In a real app, you would call your API here
    const user = {
      name: authForm.name,
      email: authForm.email
    };

    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem("ecommerceUser", JSON.stringify(user));
    setAuthModalOpen(false);
    setAuthForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem("ecommerceUser");
  };

  // Cart functions
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <h1>EXCLUSIVE</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          {/* Icons */}
          <div className="navbar-icons">
            {/* Dark mode toggle */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 19.07L6.34 17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.66 6.34L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>

            {/* User/auth */}
            {isLoggedIn ? (
              <div className="user-dropdown">
                <button className="user-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 17V15C16 13.9391 15.5786 12.9217 14.8284 12.1716C14.0783 11.4214 13.0609 11 12 11H8C6.93913 11 5.92172 11.4214 5.17157 12.1716C4.42143 12.9217 4 13.9391 4 15V17M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="username">{userData?.name}</span>
                </button>
                <div className="dropdown-content">
                  <a href="#">My Account</a>
                  <a href="#">Orders</a>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <button className="login-btn" onClick={() => setAuthModalOpen(true)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 17V15C16 13.9391 15.5786 12.9217 14.8284 12.1716C14.0783 11.4214 13.0609 11 12 11H8C6.93913 11 5.92172 11.4214 5.17157 12.1716C4.42143 12.9217 4 13.9391 4 15V17M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Login</span>
              </button>
            )}

            {/* Cart */}
            <button className="cart-icon" onClick={() => setIsCartOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 1H1V3H3L3.6 5M5 11H15L19 3H3.6M5 11L3.6 5M5 11L2.70711 13.2929C2.07714 13.9229 2.52331 15 3.41421 15H15M15 15C13.8954 15 13 15.8954 13 17C13 18.1046 13.8954 19 15 19C16.1046 19 17 18.1046 17 17C17 15.8954 16.1046 15 15 15ZM7 17C7 18.1046 6.10457 19 5 19C3.89543 19 3 18.1046 3 17C3 15.8954 3.89543 15 5 15C6.10457 15 7 15.8954 7 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cartItems.length > 0 && (
                <span className="cart-badge">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button className="mobile-menu-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {authModalOpen && (
        <div className={`modal-overlay ${darkMode ? "dark" : ""}`}>
          <div className="auth-modal">
            <button className="close-modal" onClick={() => setAuthModalOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <h2>{isLoginView ? "Login" : "Create Account"}</h2>

            {authError && <div className="auth-error">{authError}</div>}

            <form onSubmit={isLoginView ? handleLogin : handleSignup}>
              {!isLoginView && (
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={authForm.name}
                    onChange={handleAuthInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={authForm.email}
                  onChange={handleAuthInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={authForm.password}
                  onChange={handleAuthInputChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              {!isLoginView && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={authForm.confirmPassword}
                    onChange={handleAuthInputChange}
                    placeholder="••••••••"
                    required
                  />
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                {isLoginView ? "Login" : "Sign Up"}
              </button>
            </form>

            <div className="auth-switch">
              {isLoginView ? (
                <p>
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setIsLoginView(false)}>
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button type="button" onClick={() => setIsLoginView(true)}>
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart */}
      <div className={`cart-overlay ${isCartOpen ? "open" : ""} ${darkMode ? "dark" : ""}`}>
        <div className="cart-container">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button className="close-cart" onClick={() => setIsCartOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      className="remove-item" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
              <button className="continue-shopping" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </button>
            </div>
          )}

          {cartItems.length === 0 && (
            <div className="suggested-products">
              <h3>You might like</h3>
              <div className="product-grid">
                {products.slice(0, 2).map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p>${product.price.toFixed(2)}</p>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;