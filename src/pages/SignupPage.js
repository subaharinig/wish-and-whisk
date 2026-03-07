import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { User, Mail, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import "./LoginPage.css";

export default function SignupPage() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Simply login and redirect - no validation
    login({ email, name });
    navigate("/home");
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={7} xl={6}>
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
                    <h2 className="auth-title">Create Account</h2>
                    <p className="auth-subtitle">Join us and start creating amazing cakes</p>
                  </div>

                  <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-4" controlId="formName">
                      <Form.Label className="form-label">
                        <User size={16} className="me-2" />
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="auth-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formSignupEmail">
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

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="formSignupPassword">
                          <Form.Label className="form-label">
                            <Lock size={16} className="me-2" />
                            Password
                          </Form.Label>
                          <div className="password-input-wrapper">
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              placeholder="Create password"
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
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-4" controlId="formConfirmPassword">
                          <Form.Label className="form-label">
                            Confirm Password
                          </Form.Label>
                          <div className="password-input-wrapper">
                            <Form.Control
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                              className="auth-input"
                            />
                            <button
                              type="button"
                              className="password-toggle"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Check 
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        label={
                          <span className="checkbox-label">
                            I agree to the <a href="#" className="terms-link">Terms and Conditions</a>
                          </span>
                        }
                        required
                        className="custom-checkbox"
                      />
                    </Form.Group>

                    <Button 
                      type="submit" 
                      className="w-100 auth-submit-btn"
                    >
                      Create Account
                    </Button>
                  </Form>

                  <div className="auth-footer-section">
                    <p className="text-center auth-footer-text mb-0">
                      Already have an account?{" "}
                      <span 
                        className="auth-link"
                        onClick={() => navigate("/login")}
                      >
                        Login
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
