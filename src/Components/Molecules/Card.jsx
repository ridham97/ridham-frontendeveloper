import Badge from "../Atom/Badge";
import Header from "../Atom/Header";
import Paragraph from "../Atom/Paragraph";
import React from "react";

const Card = ({ header = "", description = "", active = "", landing = "" }) => {
  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <Header name={header} />
          <Badge
            color={
              active === "destroyed"
                ? "bg-red-100 text-red-800"
                : active === "retired"
                ? "bg-blue-100 text-blue-800"
                : active === "unknown" && "bg-gray-100 text-gray-800"
            }
            title={active}
          />
        </div>
        <Paragraph name={description} />
        <Paragraph name={landing} />
      </div>
    </div>
  );
};

export default Card;
