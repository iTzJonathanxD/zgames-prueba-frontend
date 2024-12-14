import React from "react";
import Login from "../components/Auth/Login";
import Header from "../components/Shared/Header";
import "./css/LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <Header /> 
      <div className="login-container">
        <main>
          <Login />
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
