import React, { useEffect, useState } from "react";
import PropertyList from "./PropertyList";
import ReservationForm from "./ReservationForm";
import "./css/PropertyReservation.css";
import ReservationList from "../Reservas/ReservationList";
import {headerStyle, headerTitleStyle} from "../../utils/constants"
const PropertyReservation = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [filters, setFilters] = useState({ location: "", propertyType: "", minPrice: "", maxPrice: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("http://localhost:4000/v1/api/reservation/get-all");
        const data = await response.json();
        setReservations(data);
      } catch (err) {
        console.error("Error al cargar reservaciones:", err);
        setError("Error al cargar reservaciones");
      }
    };
    fetchReservations();
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:4000/v1/api/property/get-all-location");
        const data = await response.json();
        setProperties(data);
        setFilteredProperties(data);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar propiedades:", err);
        setError("Error al cargar propiedades disponibles");
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    const applyFilters = () => {
      const validTypes = ["house", "apartment", "villa", "cabin", "hotel"];
      const filtered = properties.filter((property) => {
        const matchesLocation =
          filters.location === "" ||
          (property.location?.city && property.location.city.toLowerCase().includes(filters.location.toLowerCase()));
        const matchesType =
          filters.propertyType === "" ||
          (property.propertyType &&
            validTypes.includes(property.propertyType) &&
            property.propertyType.toLowerCase() === filters.propertyType.toLowerCase());
        const matchesPrice =
          (!filters.minPrice || property.pricePerNight >= Number(filters.minPrice)) &&
          (!filters.maxPrice || property.pricePerNight <= Number(filters.maxPrice));
        return matchesLocation && matchesType && matchesPrice;
      });
      setFilteredProperties(filtered);
    };

    applyFilters();
  }, [filters, properties]);

  const handleReservationClick = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div
      className="property-management-container"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to bottom, #F6F7F9, #EAF8F2)",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
        <header className="header" style={headerStyle}>
        <h1 className="header-title" style={headerTitleStyle}>
          Gestión de Propiedades
        </h1>
      </header>

      <main>
        <div
          className="filters-container"
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "30px",
            padding: "20px",
            background: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <input
            type="text"
            name="location"
            placeholder="Buscar por ubicación"
            value={filters.location}
            onChange={handleFilterChange}
            className="filter-input"
            style={{
              flex: "1",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#FAFAFA",
              fontSize: "14px",
              color: "#495057",
            }}
          />

          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleFilterChange}
            className="filter-select"
            style={{
              flex: "1",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#FAFAFA",
              fontSize: "14px",
              color: "#495057",
            }}
          >
            <option value="">Seleccionar tipo de propiedad</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="cabin">Cabin</option>
            <option value="hotel">Hotel</option>
          </select>

          <input
            type="number"
            name="minPrice"
            placeholder="Precio mínimo"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="filter-input"
            style={{
              flex: "1",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#FAFAFA",
              fontSize: "14px",
              color: "#495057",
            }}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Precio máximo"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="filter-input"
            style={{
              flex: "1",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#FAFAFA",
              fontSize: "14px",
              color: "#495057",
            }}
          />
        </div>

        <PropertyList
          properties={filteredProperties}
          selectedProperty={selectedProperty}
          onSelectProperty={handleReservationClick}
          cardStyle={{
            background: "linear-gradient(135deg, #D6EAF8, #A9DFBF)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            padding: "15px",
            marginBottom: "15px",
            border: "1px solid #85C1E9",
          }}
          actionText="Clic para reservar"
        />

        {isModalOpen && (
          <div
            className="modal"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#FFFFFF",
                padding: "25px",
                borderRadius: "12px",
                maxWidth: "500px",
                width: "90%",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <button
                className="close-button"
                onClick={closeModal}
                style={{
                  backgroundColor: "#FF6F61",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  float: "right",
                }}
              >
                X
              </button>
              <ReservationForm
                property={selectedProperty}
                onReservationSuccess={(message) => {
                  setSuccess(message);
                  closeModal();
                }}
                setError={setError}
              />
            </div>
          </div>
        )}
        <h2 style={{ fontSize: "1.8rem", margin: "20px 0", color: "#343A40" }}>Reservaciones</h2>
        <ReservationList reservations={reservations} />
      </main>
    </div>
  );
};

export default PropertyReservation;
