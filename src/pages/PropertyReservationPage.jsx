import React from "react";
import PropertyReservation from "../components/Properity/PropertyReservation";
import Header from "../components/Shared/Header";
import "./css/LoginPage.css";

const PropertyReservationPage = () => {
  return (
    <div>
      <div className="login-container">
        <main>
          <PropertyReservation />
        </main>
      </div>
    </div>
  );
};

export default PropertyReservationPage;
