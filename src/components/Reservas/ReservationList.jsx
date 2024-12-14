import React from "react";

const ReservationList = ({ reservations }) => {
    if (!Array.isArray(reservations) || reservations.length === 0) {
      return <p style={{ textAlign: "center", color: "#888" }}>No hay reservas disponibles.</p>;
    }
  
    return (
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "20px 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {reservations.map((reservation) => (
          <li
            key={reservation._id}
            style={{
              background: "linear-gradient(135deg, #E0F7FA, #FFFDE7)",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              border: "1px solid #B2EBF2",
            }}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#00796B",
                marginBottom: "10px",
              }}
            >
              {reservation.property?.name || "Propiedad desconocida"}
            </h4>
            <p style={{ fontSize: "0.9rem", margin: "5px 0", color: "#455A64" }}>
              <strong>Huésped:</strong> {reservation.guest?.name || "No especificado"}
            </p>
            <p style={{ fontSize: "0.9rem", margin: "5px 0", color: "#455A64" }}>
              <strong>Inicio:</strong> {new Date(reservation.startDate).toLocaleDateString()}
            </p>
            <p style={{ fontSize: "0.9rem", margin: "5px 0", color: "#455A64" }}>
              <strong>Fin:</strong> {new Date(reservation.endDate).toLocaleDateString()}
            </p>
            <p style={{ fontSize: "0.9rem", margin: "5px 0", color: "#455A64" }}>
              <strong>Precio total:</strong> ${reservation.totalPrice}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                margin: "5px 0",
                color: reservation.status === "confirmed" ? "#388E3C" : "#F57C00",
                fontWeight: "bold",
              }}
            >
              <strong>Estado:</strong> {reservation.status}
            </p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ReservationList;
  