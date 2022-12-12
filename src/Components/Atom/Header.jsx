/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ name = "" }) => {
  return <h3 className="truncate text-sm font-medium text-gray-900">{name}</h3>;
};

export default Header;
