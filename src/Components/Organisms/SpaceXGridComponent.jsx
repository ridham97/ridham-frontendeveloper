/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import Card from "../Molecules/Card";
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import moment from "moment";

const SpaceXGridComponent = ({ data = [] }) => {
  console.log(data);
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {data.map((item) => (
        <li
          key={item.email}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <Card
            header={item?.type}
            description={`Mission Launch: ${moment(item?.original_launch)
              .startOf("hour")
              .fromNow()}`}
            landing={`Total Landing: ${item?.landings}`}
            active={item?.status}
          />
        </li>
      ))}
    </ul>
  );
};

export default SpaceXGridComponent;
