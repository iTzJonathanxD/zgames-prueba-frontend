import React from "react";
import "./css/PropertyItem.css";

const PropertyItem = ({ property, isSelected, onSelect }) => {
  return (
    <li
      className={`property-item ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(property)}
      style={{
        background: isSelected
          ? "linear-gradient(135deg, #FFD700, #FFA07A)"
          : "linear-gradient(135deg, #E3F2FD, #FFEBEE)",
        border: isSelected ? "2px solid #FF6F61" : "2px solid transparent",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h4
        className="property-name"
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#2C3E50",
          marginBottom: "10px",
        }}
      >
        {property.name}
      </h4>
      <p
        className="property-location"
        style={{
          fontSize: "0.9rem",
          color: "#546E7A",
          marginBottom: "8px",
        }}
      >
        {property.location?.city}, {property.location?.country}
      </p>
      <p
        className="property-type"
        style={{
          fontSize: "0.9rem",
          color: "#607D8B",
          marginBottom: "8px",
        }}
      >
        Tipo: {property.propertyType}
      </p>
      <p
        className="property-price"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#FF6F61",
          marginBottom: "15px",
        }}
      >
        ${property.pricePerNight}/noche
      </p>
      <button
        className="reserve-button"
        onClick={(e) => {
          e.stopPropagation(); 
          onSelect(property);
        }}
        style={{
          background: "#FF6F61",
          color: "#FFFFFF",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "0.9rem",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "background 0.3s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#E64A19";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#FF6F61";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Clic para reservar
      </button>
    </li>
  );
};

export default PropertyItem;
