/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/react-in-jsx-scope */

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];

import { useEffect, useState } from "react";

import { Disclosure } from "@headlessui/react";
import Menu from "../Atom/Menu";
import SpaceXGridComponent from "../Organisms/SpaceXGridComponent";
import { getSpaceData } from "../../API/capsule";

export default function SpaceXComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getSpaceData()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="bg-white">
      <div className="py-16 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          SpaceX
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam itaque
          tempora, ab architecto nobis sed explicabo laborum esse eligendi sint
          veniam ad repellendus sapiente laudantium expedita aspernatur
          blanditiis? Asperiores, esse.
        </p>
      </div>
      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center border-t border-b border-gray-200"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div className="pl-6">
              <button type="button" className="text-gray-500">
                Clear all
              </button>
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <Menu name="Status" options={sortOptions} />
          </div>
        </div>
      </Disclosure>
      <SpaceXGridComponent data={data} />
    </div>
  );
}
