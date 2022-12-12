/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Paragraph = ({ name = "" }) => {
  return <p className="mt-1 truncate text-sm text-gray-500">{name}</p>;
};

export default Paragraph;
