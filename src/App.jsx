import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import PropertyReservationPage from "./pages/PropertyReservationPage";
import HomePage from "./pages/HomePage";
import "./App.css"; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/reservations" element={<PropertyReservationPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
