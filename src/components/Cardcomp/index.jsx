import React from "react";
import "./RentalCard.css";

const RentalCard = ({
  title,
  description,
  buttonText,
  backgroundColor,
  imageUrl,
}) => {
  return (
    <div
      className="rental-card"
      style={{ backgroundColor: backgroundColor || "#007bff" }}
    >
      <div className="rental-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="rental-card-button">{buttonText}</button>
      </div>
      <div className="rental-card-image">
        <img src={imageUrl} alt="Car" />
      </div>
    </div>
  );
};

export default RentalCard;
