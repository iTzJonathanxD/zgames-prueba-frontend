import React from "react";
import "../Auth/css/Login.css";

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name} className="input-label">{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default InputField;
