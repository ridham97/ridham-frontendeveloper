import React from "react";

const Header = ({ header = "", subtitle = "" }) => {
  return (
    <div className="relative bg-slate-600">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/SWOT_Homepage_Launch_Tile_DESKTOP_36ea0a3735.jpg"
          alt=""
        />
        <div
          className="absolute inset-0 bg-slate-600 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {header}
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
