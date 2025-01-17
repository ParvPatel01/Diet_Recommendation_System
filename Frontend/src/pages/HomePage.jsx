// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import homeImage from "../assets/homeImage.jpg";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 64px)", // Adjust for the height of the Navbar
  padding: "0 20px",
  flexDirection: "row",
  flexWrap: "wrap", // Allow wrapping for responsiveness
};

const mainContentWrapper = {
  margin: "20px",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  flex: "1 1 300px",
  color: "#729762",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  flex: "1 1 300px", // Allow flex-grow and flex-shrink with a min-width
};

const buttonStyle = {
  backgroundColor: "#365E32",
  color: "white",
  border: "none",
  borderRadius: "50px",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "2rem",
};
const paragraphStyle = {
  fontFamily: "Dancing Script, cursive",
  fontOpticalSizing: " auto",
  fontWeight: "weight",
  fontStyle: "normal",
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/bmi-calculator");
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={mainContentWrapper}>
          <h1>GET FIT WITH NutriGenius</h1>
          <p style={paragraphStyle}>
            Calculate your BMI and get personalized diet plans and recipes
          </p>
          <button style={buttonStyle} onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        <img src={homeImage} alt="Home" style={imageStyle} />
      </div>
    </div>
  );
};

export default HomePage;
