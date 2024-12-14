import React, { useState } from "react";
import { createReservation } from "../../services/authService";
import "./css/ReservationForm.css";

const ReservationForm = ({ property, onReservationSuccess, setError }) => {
  const [reservationData, setReservationData] = useState({
    startDate: "",
    endDate: "",
    guest: localStorage.getItem("userId"),
    property: property._id,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reservationData.startDate || !reservationData.endDate) {
      setError("Las fechas de inicio y fin son obligatorias.");
      return;
    }

    const startDate = new Date(reservationData.startDate);
    const endDate = new Date(reservationData.endDate);
    const timeDiff = Math.abs(endDate - startDate);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (dayDiff <= 0) {
      setError("La fecha de fin debe ser posterior a la fecha de inicio.");
      return;
    }

    const totalPrice = dayDiff * property.pricePerNight;

    try {
      const dataToSend = {
        ...reservationData,
        totalPrice,
      };

      console.log("Datos enviados al backend:", dataToSend);
      await createReservation(dataToSend);
      onReservationSuccess("Reserva realizada con éxito.");
    } catch (err) {
      console.error("Error al realizar la reserva:", err);
      setError(err.response?.data?.message || err.message || "Error al realizar la reserva.");
    }
  };

  return (
    <div
      className="reservation-form-container"
      style={{
        padding: "20px",
        borderRadius: "10px",
        background: "linear-gradient(135deg, #F0F8FF, #FAF0E6)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#343A40",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Reservar: {property.name}
      </h3>
      <form
        className="reservation-form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <label style={{ fontSize: "0.9rem", color: "#495057", fontWeight: "bold" }}>
          Fecha de Inicio:
          <input
            type="date"
            name="startDate"
            value={reservationData.startDate}
            onChange={handleInputChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #DDD",
              borderRadius: "8px",
              marginTop: "5px",
              background: "#F8F9FA",
            }}
          />
        </label>
        <label style={{ fontSize: "0.9rem", color: "#495057", fontWeight: "bold" }}>
          Fecha de Fin:
          <input
            type="date"
            name="endDate"
            value={reservationData.endDate}
            onChange={handleInputChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #DDD",
              borderRadius: "8px",
              marginTop: "5px",
              background: "#F8F9FA",
            }}
          />
        </label>
        <button
          type="submit"
          className="btn-reserve"
          style={{
            backgroundColor: "#FF6F61",
            color: "#FFFFFF",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            textAlign: "center",
            transition: "background 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E64A19";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF6F61";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Reservar
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
