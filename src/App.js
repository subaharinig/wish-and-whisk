import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CustomizePage from "./pages/CustomizePage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected pages */}
        <Route
          path="/home"
          element={
              <HomePage />
          }
        />

        <Route
          path="/customize"
          element={
              <CustomizePage />
          }
        />

        <Route
          path="/cart"
          element={
              <CartPage />
            
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
