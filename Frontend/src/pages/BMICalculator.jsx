import React from "react";
import BMIInputCard from "../components/BMIInputCard";
import BMIBackground from "../assets/BMIBackground.png";

function BMICalculator() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundImage: `url(${BMIBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <BMIInputCard />
      </div>
    </div>
  );
}

export default BMICalculator;
