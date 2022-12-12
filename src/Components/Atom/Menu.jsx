/* eslint-disable react/prop-types */
import React, { Fragment } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu as TailwindMenu } from "@headlessui/react";
import { Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Menu = ({ name = "", options = [] }) => {
  return (
    <TailwindMenu as="div" className="relative inline-block">
      <div className="flex">
        <TailwindMenu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          {name}
          <ChevronDownIcon
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </TailwindMenu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <TailwindMenu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <TailwindMenu.Item key={option.name}>
                {({ active }) => (
                  <a
                    href={option.href}
                    className={classNames(
                      option.current
                        ? "font-medium text-gray-900"
                        : "text-gray-500",
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {option.name}
                  </a>
                )}
              </TailwindMenu.Item>
            ))}
          </div>
        </TailwindMenu.Items>
      </Transition>
    </TailwindMenu>
  );
};

export default Menu;
