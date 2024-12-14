import React from "react";
import { Link } from "react-router-dom";
import "./css/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Bienvenido a BetElite</h1>
        <p className="hero-subtitle">
          La mejor plataforma para gestion de reservas de propiedades.
        </p>
      </header>
      <nav className="home-navigation">
        <Link to="/login" className="home-link btn-primary">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="home-link btn-secondary">
          Registrarse
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
