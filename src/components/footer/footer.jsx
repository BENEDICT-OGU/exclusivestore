import React from "react";
import "./footer.css";
import { FaTwitter, FaFacebookF, FaGoogle, FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Exclusive</h2>
          <p className="footer-subtitle">Subscribe</p>
          <p className="footer-text">Get 10% off your first order</p>
          <div className="subscribe-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
            />
            <button className="subscribe-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaGoogle /></a>
            <a href="#" className="social-icon"><FaGithubAlt /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li><a href="#">Customer Support</a></li>
            <li><a href="mailto:benedictogu24@gmail.com">benedictogu24@gmail.com</a></li>
            <li><a href="tel:+2347016271327">+234 7016 2713 27</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">FAQ</h3>
          <ul className="footer-links">
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Account</h3>
          <ul className="footer-links">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login/Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="copyright">
        <p>© Exclusive 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;