import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import logo from '../assets/logo.png';

export default function Header() {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();   // <-- ADD THIS

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/"); // <-- REDIRECT TO LANDING PAGE
  };

  return (
    <motion.header
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <motion.div whileHover={{ scale: 1.05 }} className="logo-wrapper">
            <img src={logo} alt="Wish and Whisk" className="logo-image" />
            <span className="logo-text">Wish and Whisk</span>
          </motion.div>
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/" className="nav-item">About</Link>
          <Link to="/" className="nav-item">Services</Link>
          <Link to="/" className="nav-item">Blogs</Link>

          {user ? (
            <>
              <Link to="/home" className="nav-item">Dashboard</Link>
              <Link to="/customize" className="nav-item">Customize</Link>
              <Link to="/cart" className="nav-item">
                <span>Cart</span>
                <span className="cart-badge">0</span>
              </Link>

              {/* UPDATED BUTTON */}
              <motion.button
                onClick={handleLogout}
                className="btn-logout"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/signup" className="btn-signup">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
