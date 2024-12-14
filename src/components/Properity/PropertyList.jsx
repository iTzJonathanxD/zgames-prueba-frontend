import React from "react";
import PropertyItem from "./PropertyItem";
import "./css/PropertyList.css";

const PropertyList = ({ properties, selectedProperty, onSelectProperty }) => {
  return (
    <div className="property-list-container">
      <h3 className="property-list-title">Propiedades Disponibles</h3>
      <ul className="property-list">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyItem
              key={property._id}
              property={property}
              isSelected={selectedProperty?._id === property._id}
              onSelect={onSelectProperty}
            />
          ))
        ) : (
          <p className="no-properties-message">No hay propiedades disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default PropertyList;
