import React, { useState } from "react";

const AvtoCard = ({
  carName = "Koenigsegg",
  carType = "Sport",
  imageUrl, // Rasm uchun zaxira URL
  fuelCapacity = "90L",
  transmission = "Manual",
  seats = "2 People",
  price,
  onRentClick = () => alert("Rent button clicked!"),
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="w-[304px] h-[388px] p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{carName}</h2>
          <p className="text-sm text-gray-500">{carType}</p>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="p-1 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 8.25c0-3.451-2.799-6.25-6.25-6.25s-6.25 2.799-6.25 6.25c0 5.796 6.25 10.75 6.25 10.75s6.25-4.954 6.25-10.75z"
            />
          </svg>
        </button>
      </div>

      {/* Image */}
      <img
        src={imageUrl}
        alt={carName}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      {/* Features */}
      <div className="flex justify-between items-center text-gray-600 text-sm mb-4">
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12.75h16.5m-16.5 0a4.5 4.5 0 014.5-4.5h7.5a4.5 4.5 0 014.5 4.5m-16.5 0a4.5 4.5 0 004.5 4.5h7.5a4.5 4.5 0 004.5-4.5"
            />
          </svg>
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 7.5l6 4.5-6 4.5V7.5z"
            />
          </svg>
          <span>{transmission}</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 20.25l1.5-6.75H4.5l1.5-6.75m3 13.5v-6.75m0 6.75h7.5a2.25 2.25 0 002.25-2.25v-8.25a2.25 2.25 0 00-2.25-2.25H7.5m7.5 6.75l1.5 6.75M7.5 10.5h-3M18 10.5h-3"
            />
          </svg>
          <span>{seats}</span>
        </div>
      </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold text-gray-900">{price}/day</p>
        <button
          onClick={onRentClick}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default AvtoCard;
