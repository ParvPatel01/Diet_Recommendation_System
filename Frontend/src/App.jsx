// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DietCalculator from "./pages/DietCalculator";
import BMICalculator from "./pages/BMICalculator";
import PersonalizedDiet from "./pages/PersonalizedDiet";
import Login from "./components/Login";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/diet-calculator" element={<DietCalculator />} />
        <Route path="/personalized-diet" element={<PersonalizedDiet />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
