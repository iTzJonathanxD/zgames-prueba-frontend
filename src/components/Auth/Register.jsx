import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Register.css";
import InputField from "../Shared/InputField";
import Button from "../Shared/Button";
import { register } from "../../services/authService";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    role: "guest",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await register(userData);
      setSuccess("Usuario registrado con éxito. ¡Ahora puedes iniciar sesión!");
      setUserData({
        username: "",
        email: "",
        password: "",
        role: "guest",
      });
      setLoading(false);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Error en el registro");
    }
  };

  const isFormValid = () => {
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    return true;
  };

  return (
    <div className="register-container">
      <form
        onSubmit={(e) => {
          if (isFormValid()) handleSubmit(e);
        }}
        className="register-form"
      >
        <h2 className="register-title">Crear una Cuenta</h2>
        <p className="register-subtitle">
          Completa el formulario para registrarte en la aplicación.
        </p>
        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">{success}</p>}
        <InputField
          label="Nombre de Usuario"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Ingresa tu nombre de usuario"
          labelClass="register-input-label"
          inputClass="register-input-field"
        />
        <InputField
          label="Correo Electrónico"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Ingresa tu correo"
          labelClass="register-input-label"
          inputClass="register-input-field"
        />
        <InputField
          label="Contraseña"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Crea una contraseña"
          labelClass="register-input-label"
          inputClass="register-input-field"
        />
        <Button
          text={loading ? "Registrando..." : "Registrar"}
          type="submit"
          className="register-btn"
          disabled={loading}
        />
        <div className="register-footer">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="register-footer-link">
              Inicia sesión
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
