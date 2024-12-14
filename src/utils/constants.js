export const API_BASE_URL = "http://localhost:8080/api";

export const ERROR_MESSAGES = {
  INVALID_LOGIN: "Correo o contraseña incorrectos.",
  REQUIRED_FIELDS: "Por favor, completa todos los campos.",
  GENERAL_ERROR: "Ha ocurrido un error. Intenta de nuevo más tarde.",
};

export const SUCCESS_MESSAGES = {
  REGISTER_SUCCESS: "¡Registro exitoso! Ahora puedes iniciar sesión.",
};


export const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",
  backgroundColor: "#F8F9FA",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

export const headerTitleStyle = {
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#2C3E50",
  textShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
  letterSpacing: "1px",
  textTransform: "uppercase",
};
