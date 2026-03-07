import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import "./LoginPage.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simply login and redirect - no validation
    login({ email });
    navigate("/home");
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={6} xl={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-4">
                <Button 
                  variant="link" 
                  className="text-decoration-none back-btn"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft size={18} className="me-2" />
                  Back to Home
                </Button>
              </div>

              <Card className="auth-card shadow-lg border-0">
                <Card.Body className="p-5">
                  <div className="text-center mb-5">
                    <h2 className="auth-title">Welcome Back!</h2>
                    <p className="auth-subtitle">Login to continue your sweet journey</p>
                  </div>

                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-4" controlId="formLoginEmail">
                      <Form.Label className="form-label">
                        <Mail size={16} className="me-2" />
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="auth-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formLoginPassword">
                      <Form.Label className="form-label">
                        <Lock size={16} className="me-2" />
                        Password
                      </Form.Label>
                      <div className="password-input-wrapper">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="auth-input"
                        />
                        <button
                          type="button"
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check 
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        label="Remember me"
                        className="custom-checkbox"
                      />
                      <a href="#" className="forgot-link">
                        Forgot password?
                      </a>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-100 auth-submit-btn"
                    >
                      Login to Account
                    </Button>
                  </Form>

                  <div className="auth-footer-section">
                    <p className="text-center auth-footer-text mb-0">
                      Don't have an account?{" "}
                      <span 
                        className="auth-link"
                        onClick={() => navigate("/signup")}
                      >
                        Sign Up
                      </span>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
