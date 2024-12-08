import React from "react";

const Pick = ({
  title = "Pick - Up",
  locationLabel = "Locations",
  dateLabel = "Date",
  timeLabel = "Time",
  selectCityText = "Select your city",
  selectDateText = "Select your date",
  selectTimeText = "Select your time",
}) => {
  return (
    <div className="w-[800px] p-4 border rounded-lg shadow-md">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <p className="text-lg font-medium text-black">{title}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* Locations */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">{locationLabel}</p>
          <p className="text-gray-500">{selectCityText}</p>
        </div>
        {/* Date */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">{dateLabel}</p>
          <p className="text-gray-500">{selectDateText}</p>
        </div>
        {/* Time */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">{timeLabel}</p>
          <p className="text-gray-500">{selectTimeText}</p>
        </div>
      </div>
    </div>
  );
};

export default Pick;
