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
      <Routes>
        {/* Route without Navbar */}
        <Route path="/" element={<Login />} />

        {/* Routes with Navbar */}
        <Route
          path="/home/*"
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />
        <Route
          path="/bmi-calculator/*"
          element={
            <>
              <Navbar />
              <BMICalculator />
            </>
          }
        />
        <Route
          path="/diet-calculator/*"
          element={
            <>
              <Navbar />
              <DietCalculator />
            </>
          }
        />
        <Route
          path="/personalized-diet/*"
          element={
            <>
              <Navbar />
              <PersonalizedDiet />
            </>
          }
        />

        {/* Error route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
