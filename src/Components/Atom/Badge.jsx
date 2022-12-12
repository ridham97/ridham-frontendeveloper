/* eslint-disable react/prop-types */
import React from "react";

const Badge = ({ title = "", color = "bg-green-100 text-green-800" }) => {
  return (
    <span
      className={`inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 ${color}`}
    >
      {title}
    </span>
  );
};

export default Badge;
