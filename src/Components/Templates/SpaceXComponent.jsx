/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const sortOptions = [
  { name: "Active", href: "#", current: true },
  { name: "Retired", href: "#", current: false },
  { name: "Destroyed", href: "#", current: false },
  { name: "Unknown", href: "#", current: false },
];

import { useEffect, useState } from "react";

import { Disclosure } from "@headlessui/react";
import Header from "../Organisms/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Atom/Loader";
import Menu from "../Atom/Menu";
import Search from "../Atom/Search";
import SpaceXGridComponent from "../Organisms/SpaceXGridComponent";
import { getSpaceData } from "../../API/capsule";

export default function SpaceXComponent() {
  const [pageSize, setPageSize] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getSpaceData(6, 0)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const fetchMoreData = () => {
    setPageSize((res) => res + 1);
    getSpaceData(6, pageSize)
      .then((res) => res.json())
      .then((res) => {
        if (res.length <= 0) {
          setHasMoreData(false);
        }
        setData((prev) => [...prev, ...res]);
      });
  };

  return (
    <div className="bg-white">
      <Header
        header="spaceX"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, libero dolorum impedit, cum quis cumque doloribus incidunt voluptatibus, omnis natus at. Quam ex aut deleniti alias? Officiis dolor a corporis?"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5">
          <Search labelName="Search by status and type" />
        </div>
        <Disclosure
          as="section"
          aria-labelledby="filter-heading"
          className="grid items-center  border-b mb-3 border-gray-200"
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
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMoreData}
          loader={<Loader />}
        >
          <SpaceXGridComponent data={data} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
