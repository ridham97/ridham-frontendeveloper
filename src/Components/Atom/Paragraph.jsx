/* eslint-disable no-unused-vars */
import React from "react";

const Paragraph = ({ name = "" }) => {
  return (
    <p className="mt-1 text-start truncate text-sm text-gray-500">{name}</p>
  );
};

export default Paragraph;
