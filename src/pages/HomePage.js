import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Wand2, Star, ChevronLeft, ChevronRight, Award } from "lucide-react";
import "./HomePage.css";

// Import your local images
import cake1 from '../assets/cake1.jpg';
import cake2 from '../assets/cake2.jpg';
import cake3 from '../assets/cake3.jpg';
import cake4 from '../assets/cake4.jpg';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';


export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wishlist, setWishlist] = useState({});
  const [customizing, setCustomizing] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize navigate here

  // Featured Highlights Data
  const featuredHighlights = [
    {
      id: 1,
      title: "Chocolate Truffle Cake",
      badge: "Popular",
      image: cake1,
      description: "Rich dark chocolate layers with smooth ganache"
    },
    {
      id: 2,
      title: "Red Velvet Supreme",
      badge: "Trending",
      image: cake2,
      description: "Classic cream cheese frosting"
    },
    {
      id: 3,
      title: "Vanilla Bean Delight",
      badge: "Bestseller",
      image: cake3,
      description: "Premium vanilla perfection"
    },
    {
      id: 4,
      title: "Strawberry Paradise",
      badge: "New",
      image: cake4,
      description: "Fresh strawberry layers"
    }
  ];

  // Categories Data
  const categories = [
    { name: "Cakes", icon: "🎂", count: 24 },
    { name: "Pastries", icon: "🥐", count: 18 },
    { name: "Cupcakes", icon: "🧁", count: 16 },
    { name: "Cookies", icon: "🍪", count: 12 }
  ];

  // Featured Products Data
  const featuredProducts = [
    { 
      id: 1, 
      name: "Cannoncini", 
      price: "$45", 
      rating: 4.9, 
      reviews: 234, 
      image: p1, 
      category: "Cakes" 
    },
    { 
      id: 2, 
      name: "Mini Vanilla Cream Tarts", 
      price: "$48", 
      rating: 4.8, 
      reviews: 189, 
      image: p2, 
      category: "Cakes" 
    },
    { 
      id: 3, 
      name: "Mini Lemon Cheesecakes", 
      price: "$42", 
      rating: 4.9, 
      reviews: 312, 
      image: p3, 
      category: "Cakes" 
    },
    { 
      id: 4, 
      name: "Parisian Macaron Magic", 
      price: "$50", 
      rating: 4.7, 
      reviews: 145, 
      image: p4, 
      category: "Cakes" 
    },
    { 
      id: 5, 
      name: "Banana Pudding Recipe", 
      price: "$50", 
      rating: 4.7, 
      reviews: 145, 
      image: p5, 
      category: "Cakes" 
    },
    { 
      id: 6, 
      name: "Caramel Cake", 
      price: "$50", 
      rating: 4.7, 
      reviews: 145, 
      image: p5, 
      category: "Cakes" 
    },
  ];

  // Auto-slide effect for featured highlights
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => 
        (prev === featuredHighlights.length - 1 ? 0 : prev + 1)
      );
    }, 4000);
    
    return () => clearInterval(slideInterval);
  }, []);

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      (prev === featuredHighlights.length - 1 ? 0 : prev + 1)
    );
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      (prev === 0 ? featuredHighlights.length - 1 : prev - 1)
    );
  };

  // Toggle wishlist for a product
  const toggleWishlist = (productId) => {
    setWishlist(prev => ({ 
      ...prev, 
      [productId]: !prev[productId] 
    }));
  };

  // Handle customize button click
  const handleCustomize = (productId) => {
    setCustomizing(productId);
    setTimeout(() => setCustomizing(null), 1500);
    console.log(`Customizing product: ${productId}`);
  };

  // Handle buy button click
  const handleBuy = (productId) => {
    const product = featuredProducts.find(p => p.id === productId);
    setCart([...cart, product]);
    console.log(`Added to cart: ${productId}`);
  };

  // Handle view all click
  const handleViewAll = () => {
    console.log("View all products");
  };

  return (
    <div className="home-page">
      {/* Featured Highlights Banner Section */}
      <section className="highlights-banner">
        <div className="container-wrapper">
          <div className="highlights-card">
            {/* Header with Icon */}
            <div className="highlights-header">
              <Award className="award-icon" size={28} />
              <h3>Trending</h3>
            </div>

            {/* Slider Container */}
            <div className="highlights-slider">
              {/* Previous Button */}
              <button 
                className="slider-nav prev" 
                onClick={prevSlide}
                aria-label="Previous slide"
                title="Previous"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slider Content */}
              <div className="highlights-content">
                {featuredHighlights.map((item, index) => (
                  <div
                    key={item.id}
                    className={`highlight-item ${index === currentSlide ? 'active' : ''}`}
                  >
                    {/* Highlight Image */}
                    <div className="highlight-image">
                      <img src={item.image} alt={item.title} />
                      <span className="highlight-badge">
                        {item.badge}
                      </span>
                    </div>

                    {/* Highlight Info */}
                    <div className="highlight-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <button className="btn-order-now"
                      onClick={() => navigate('/customize')}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button 
                className="slider-nav next" 
                onClick={nextSlide}
                aria-label="Next slide"
                title="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider Dots Navigation */}
            <div className="slider-dots">
              {featuredHighlights.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section-horizontal">
        <div className="container-wrapper">
          <div className="categories-horizontal-container">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`category-chip ${index === 0 ? 'active' : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => navigate('/customize')}
              >
                <span className="category-chip-icon">{category.icon}</span>
                <div>
                  <p className="category-chip-name">{category.name}</p>
                  <small className="category-chip-count">
                    {category.count} items
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products-section">
        <div className="container-wrapper">
          {/* Section Header */}
          <div className="products-header">
            <h2 className="section-title-compact">Featured Products</h2>
            <button
              className="view-all-compact"
               onClick={() => navigate('/customize')}
            >
              View All
            </button>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {/* Product Image Container */}
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  
                  {/* Wishlist Button */}
                  <button
                    className="wishlist-btn"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                    title="Add to wishlist"
                  >
                    <Heart
                      size={18}
                      fill={wishlist[product.id] ? "#E63946" : "none"}
                      color={wishlist[product.id] ? "#E63946" : "currentColor"}
                    />
                  </button>
                </div>

                {/* Product Body */}
                <div className="product-body">
                  {/* Product Title */}
                  <h6 className="product-title">{product.name}</h6>

                  {/* Product Rating */}
                  <div className="product-rating">
                    <Star size={14} fill="#FFD700" stroke="#FFD700" />
                    <span className="rating-text">{product.rating}</span>
                    <span className="reviews-text">({product.reviews})</span>
                  </div>

                  {/* Product Price */}
                  <div className="product-price">
                    <span className="price">{product.price}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="product-actions">
                    {/* Customize Button */}
                    <button
                      className={`btn-action btn-customize ${customizing === product.id ? 'active' : ''}`}
                        onClick={() => navigate('/customize')}
                      title="Customize product"
                      aria-label="Customize"
                    >
                      <Wand2 size={16} />
                      <span className="btn-text">Customize</span>
                    </button>

                    {/* Buy Button */}
                    <button
                      className="btn-action btn-buy"
                        onClick={() => navigate('/customize')}
                      title="Add to cart"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={16} />
                      <span className="btn-text">Buy</span>
                    </button>

                    {/* Wishlist Toggle Button */}
                    <button
                      className={`btn-action btn-like ${
                        wishlist[product.id] ? 'liked' : ''
                      }`}
                        onClick={() => navigate('/customize')}
                      title="Add to wishlist"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}