import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from "lucide-react";
import logo from '../assets/logo.jpg'; // Import your logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Facebook, name: "Facebook", url: "#" },
    { Icon: Instagram, name: "Instagram", url: "#" },
    { Icon: Twitter, name: "Twitter", url: "#" },
    { Icon: Linkedin, name: "LinkedIn", url: "#" }
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Customize Cake", path: "/customize" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const supportLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Shipping Info", path: "/shipping" },
    { name: "Returns", path: "/returns" },
    { name: "Privacy Policy", path: "/privacy" }
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo-wrapper">
              <img src={logo} alt="Wish and Whisk" className="footer-logo-image" />
              <h3 className="footer-logo-text">Wish and Whisk</h3>
            </div>
            <p className="footer-tagline">
              Customize your cravings, create your masterpiece. Where every celebration becomes unforgettable.
            </p>
            <div className="social-links">
              {socialLinks.map(({ Icon, name, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={name}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              {supportLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <span>hcg@wishandwhip.com</span>
              </li>
              <li>
                <Phone size={18} />
                <span>22222 11111</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
            <div className="newsletter">
              <p className="newsletter-text">Subscribe to our newsletter</p>
              <div className="newsletter-input-wrapper">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
                <motion.button 
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Wish and Whisk. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">·</span>
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">·</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
