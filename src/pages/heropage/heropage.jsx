import React, { useState, useEffect } from 'react';
import './heropage.css';

const Homepage = () => {
  const [activeCollection, setActiveCollection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const collections = [
    {
      name: "Autumn Essentials",
      description: "Curated selection for the season",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/2265882/1.jpg?8278",
      cta: "Discover"
    },
    {
      name: "Luxury Watches",
      description: "Timeless precision and style",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/0106762/1.jpg?7631",
      cta: "Explore"
    },
    {
      name: "Modern Furniture",
      description: "Redefine your living space",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/113227/1.jpg?5004",
      cta: "View Collection"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Minimalist Chair",
      price: 349,
      category: "Furniture",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/2970642/1.jpg?3317"
    },
    {
      id: 2,
      name: "Leather Portfolio",
      price: 199,
      category: "Accessories",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/6312493/1.jpg?9919"
    },
    {
      id: 3,
      name: "Ceramic Tableware",
      price: 129,
      category: "Home",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/9649804/1.jpg?4512"
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: 279,
      category: "Electronics",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/2834104/1.jpg?0189"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`homepage ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="line">Elevate Your</span>
              <span className="line">Everyday</span>
            </h1>
            <p className="hero-subtitle">Curated selections for the discerning individual</p>
            <button className="hero-cta">
              <span>Explore Collections</span>
              <div className="arrow-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src={collections[activeCollection].image} 
                alt={collections[activeCollection].name}
                className="main-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="collection-info">
              <h3>{collections[activeCollection].name}</h3>
              <p>{collections[activeCollection].description}</p>
            </div>
          </div>
        </div>
        <div className="collection-nav">
          {collections.map((collection, index) => (
            <button
              key={index}
              className={`nav-item ${index === activeCollection ? 'active' : ''}`}
              onClick={() => setActiveCollection(index)}
            >
              <span className="index">0{index + 1}</span>
              <span className="name">{collection.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2 className="section-title">Featured Selections</h2>
          <p className="section-subtitle">Carefully curated for quality and design</p>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="quick-view">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <span className="category">{product.category}</span>
                <h3 className="name">{product.name}</h3>
                <span className="price">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      {/* <section className="editorial">
        <div className="editorial-content">
          <div className="editorial-text">
            <h2>Design Philosophy</h2>
            <p>
              We believe in products that stand the test of time—both in quality and design. 
              Each piece in our collection is selected for its craftsmanship, materials, 
              and enduring aesthetic.
            </p>
            <button className="editorial-cta">
              <span>Our Story</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="editorial-image">
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3" alt="Design details" />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Homepage;