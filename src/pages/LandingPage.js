import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, Star, Gift, Award, Clock, Heart, Zap, 
  TrendingUp, Users, ShoppingBag, Cake, 
  Package, Shield, Smile, ArrowRight, CheckCircle 
} from "lucide-react";
import "./LandingPage.css";

// Import your images correctly
import cake from '../assets/c1.jpg';
import chocolateCake from '../assets/cc.jpg';
import strawberryCake from '../assets/sc.jpg';
import croissant from '../assets/fc.jpg';
import testimonial1 from '../assets/ts1.jpg';
import testimonial2 from '../assets/ts2.jpg';
import testimonial3 from '../assets/ts3.jpg';

export default function LandingPage() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    { icon: <Cake size={24} />, text: "500+ Designs" },
    { icon: <Star size={24} />, text: "5-Star Rated" },
    { icon: <Users size={24} />, text: "50K+ Customers" },
    { icon: <Clock size={24} />, text: "Same Day Delivery" }
  ];

  const mainFeatures = [
    {
      icon: <Sparkles size={40} />,
      title: "AI-Powered Customization",
      description: "Design your dream cake with our intelligent AI tool. Get personalized recommendations based on occasion, taste, and preferences.",
      color: "#f7718cff",
      gradient: "linear-gradient(135deg, #f35675ff 0%, #FF8FA3 100%)"
    },
    {
      icon: <ShoppingBag size={40} />,
      title: "Easy Online Ordering",
      description: "Browse our extensive collection of cakes and pastries. Order with just a few clicks and track your delivery in real-time.",
      color: "#B4A7D6",
      gradient: "linear-gradient(135deg, #9b75f9ff 0%, #9B8AC4 100%)"
    },
    {
      icon: <Gift size={40} />,
      title: "Rewards & Loyalty Program",
      description: "Earn points with every purchase. Unlock exclusive perks, discounts, and special birthday surprises.",
      color: "#FFD6A5",
      gradient: "linear-gradient(135deg, #f5b96fff 0%, #FFBE76 100%)"
    },
    {
      icon: <Package size={40} />,
      title: "Real-Time Order Tracking",
      description: "Stay updated with live order status. From baking to delivery, know exactly where your cake is at every moment.",
      color: "#A8E6CF",
      gradient: "linear-gradient(135deg, #81f9cdff 0%, #7FD8BE 100%)"
    }
  ];

  // Use imported images
  const trendingProducts = [
    {
      image: chocolateCake,
      name: "Chocolate Velvet",
      category: "Bestseller",
      price: "$45",
      rating: 4.9,
      orders: "2.3K+"
    },
    {
      image: croissant,
      name: "French Croissant",
      category: "Pastry",
      price: "$8",
      rating: 4.9,
      orders: "5.2K+"
    },
    {
      image: strawberryCake,
      name: "Strawberry Dream",
      category: "Trending",
      price: "$50",
      rating: 4.8,
      orders: "1.8K+"
    }
  ];

  const benefits = [
    { icon: <Shield size={28} />, title: "Quality Guaranteed", desc: "100% fresh ingredients" },
    { icon: <Clock size={28} />, title: "Fast Delivery", desc: "Same day available" },
    { icon: <Heart size={28} />, title: "Made with Love", desc: "Crafted by experts" },
    { icon: <Smile size={28} />, title: "Customer Satisfaction", desc: "4.9/5 rating" }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Unique Designs" },
    { number: "15K+", label: "Orders Completed" },
    { number: "4.9", label: "Average Rating", icon: <Star size={32} fill="#FFD700" stroke="#FFD700" /> }
  ];

  const testimonials = [
    {
      name: "Tony Stark",
      role: "Entrepreneur",
      review: "The AI customization tool is incredible! Made my daughter's birthday cake exactly as she imagined. The quality and taste exceeded our expectations.",
      rating: 5,
      image: testimonial1
    },
    {
      name: "Tom Holland",
      role: "College Student",
      review: "Best bakery website ever! The rewards program is generous and delivery is always on time. Highly recommend for corporate events.",
      rating: 5,
      image: testimonial2
    },
    {
      name: "Andrew Garfield",
      role: "Scientist",
      review: "Their pastries are divine! Love being able to order online and track my delivery. Perfect for weddings and special occasions.",
      rating: 5,
      image: testimonial3
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <motion.div 
                className="hero-badge glass-effect"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp size={18} />
                <span>AI-Powered Cake Designer</span>
              </motion.div>

              <h1 className="hero-title">
                Customize Your Cravings
                <span className="gradient-text"> Create Magic</span>
              </h1>

              <p className="hero-subtitle">
                Welcome to the future of cake ordering! Design your perfect cake with AI, 
                order trending pastries, track deliveries in real-time, and earn rewards with every bite.
              </p>

              <div className="hero-buttons">
                <Link to="/signup" className="btn btn-primary btn-glow">
                  <Sparkles size={20} />
                  Start Creating Free
                  <ArrowRight size={20} />
                </Link>
                <Link to="/customize" className="btn btn-secondary glass-effect">
                  <Cake size={20} />
                  Explore Designs
                </Link>
              </div>

              <div className="hero-stats">
                {heroFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="hero-stat-item glass-effect"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                  >
                    {feature.icon}
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-visual"
            >
              <div className="cake-showcase-image">
                <motion.div
                  className="showcase-image-wrapper glow-border"
                  animate={{ 
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Using imported image correctly */}
                  <img 
                    src={cake}
                    alt="Premium Custom Cake"
                    className="hero-cake-image"
                  />
                  <div className="glow-ring"></div>
                  <div className="glow-ring-2"></div>
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="floating-badge badge-1"
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Award size={20} />
                  <span>Premium Quality</span>
                </motion.div>
                
                <motion.div 
                  className="floating-badge badge-2"
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Star size={20} fill="#FFD700" stroke="#FFD700" />
                  <span>4.9 Rating</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              <TrendingUp className="title-icon" />
              Trending Delights
            </h2>
            <p className="section-subtitle">Discover our most popular cakes and pastries loved by thousands</p>
          </motion.div>

          <div className="products-grid-minimal">
            {trendingProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="product-card-minimal glass-effect"
              >
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image-minimal"
                  />
                  <div className="product-badge-minimal">{product.category}</div>
                  <div className="product-overlay">
                    <button className="btn-quick-view">
                      <ShoppingBag size={20} />
                      <span>Quick Add</span>
                    </button>
                  </div>
                </div>
                
                <div className="product-details">
                  <h3 className="product-name-minimal">{product.name}</h3>
                  <div className="product-meta">
                    <div className="product-rating-minimal">
                      <Star size={14} fill="#FFD700" stroke="#FFD700" />
                      <span>{product.rating}</span>
                    </div>
                    <span className="product-divider">•</span>
                    <span className="product-orders-minimal">{product.orders} orders</span>
                  </div>
                  <div className="product-footer-minimal">
                    <span className="product-price-minimal">{product.price}</span>
                    <button className="btn-add-minimal">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="view-all-container"
          >
            <Link to="/products" className="btn btn-view-all glass-effect">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              <Zap className="title-icon" />
              Amazing Features
            </h2>
            <p className="section-subtitle">Everything you need for the perfect cake experience</p>
          </motion.div>

          <div className="features-grid">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="feature-card glass-effect"
                style={{ '--feature-color': feature.color }}
              >
                <div 
                  className="feature-icon"
                  style={{ background: feature.gradient }}
                >
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="benefit-item glass-effect"
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section glass-effect">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-item"
              >
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  {stat.icon && <div className="stat-icon">{stat.icon}</div>}
                </div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              <Heart className="title-icon" />
              Customer Love
            </h2>
            <p className="section-subtitle">See what our happy customers are saying</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="testimonial-card glass-effect"
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                  ))}
                </div>
                <p className="testimonial-review">"{testimonial.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-container glass-effect"
        >
          <div className="cta-content">
            <div className="cta-icon-wrapper">
              <Sparkles size={48} className="cta-main-icon" />
            </div>
            <h2 className="cta-title">Ready to Create Your Dream Cake?</h2>
            <p className="cta-subtitle">
              Join 50,000+ happy customers who made their celebrations unforgettable
            </p>
            <div className="cta-features">
              <span><CheckCircle size={18} /> Free AI Design Tool</span>
              <span><CheckCircle size={18} /> Instant Rewards</span>
              <span><CheckCircle size={18} /> Same Day Delivery</span>
            </div>
            <Link to="/signup" className="btn btn-primary btn-glow btn-large">
              <Sparkles size={22} />
              Start Your Sweet Journey
              <ArrowRight size={22} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
