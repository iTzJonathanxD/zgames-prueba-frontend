import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const navigate = useNavigate(); 

  return (
    <header className="header">
      <div className="header-logo">
        <h1>Sistema de Reservas - Jonathan</h1>
      </div>
      <nav className="header-nav">
        <button
          className="header-btn header-login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="header-btn header-register-btn"
          onClick={() => navigate("/register")}
        >
          Registro
        </button>
      </nav>
    </header>
  );
};

export default Header;
