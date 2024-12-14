import React from "react";
import Register from "../components/Auth/Register";
import "./css/RegisterPage.css";
import Header from "../components/Shared/Header";
const RegisterPage = () => {
  return (
    <div>
      <Header />
      <div className="register-container">
        <header>
          <h1 className="register-title">Rocky Linux</h1>
          <img
          src={`${process.env.PUBLIC_URL}/img/rocky_linux.png`}
          alt="Decorative"
          className="animated-image"
        />
          <p className="register-subtitle">
            Llena el formulario para registrarte.
          </p>
        </header>
        <main>
          <Register />
        </main>
      </div>
    </div>
  );
};

export default RegisterPage;
