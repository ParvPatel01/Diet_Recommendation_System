// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DietCalculatorPage from "./pages/DietCalculatorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here when ready */}
      </Routes>
    </Router>
  );
}

export default App;
