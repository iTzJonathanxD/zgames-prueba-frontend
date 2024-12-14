import React, { useState } from "react";
import { login } from "../../services/authService"; 
import "./css/Login.css"; 
import InputField from "../Shared/InputField";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess(false); 
    try {
      const response = await login(credentials);

      const userId = response?.id; 

      if (userId) {
        localStorage.setItem("userId", userId);
        console.log("ID del usuario guardado en localStorage:", userId);
      } else {
        throw new Error("No se encontró el ID del usuario en la respuesta.");
      }

      console.log("Usuario logueado con éxito:", response);
      setSuccess(true); 
      navigate("/reservations"); 
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Iniciar Sesión</h2>
        <p className="auth-subtitle">
          Ingresa tus credenciales para acceder a tu cuenta.
        </p>
        {error && <p className="auth-error">{error}</p>}
        {success && (
          <p className="auth-success">Inicio de sesión exitoso. Redirigiendo...</p>
        )}
        <InputField
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={credentials.email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type="submit" text="Iniciar Sesión" className="btn-primary" />
        <div className="auth-footer">
          <p>
            ¿No tienes cuenta?{" "}
            <a href="/register" className="auth-link">
              Regístrate aquí
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
