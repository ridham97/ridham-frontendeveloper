/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from "react";

import Header from "../Organisms/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Atom/Loader";
import Search from "../Atom/Search";
import SpaceXGridComponent from "../Organisms/SpaceXGridComponent";
import { getSpaceData } from "../../API/capsule";

export default function SpaceXComponent() {
  const [searchValue, setSearchValue] = useState("");
  const [pageSize, setPageSize] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getSpaceData(6, 0)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilterData(res);
      });
  }, []);

  const fetchMoreData = () => {
    setPageSize((res) => res + 1);
    getSpaceData(6, pageSize)
      .then((res) => res.json())
      .then((res) => {
        if (res.length <= 1) {
          setHasMoreData(false);
        }
        setData((prev) => [...prev, ...res]);
      });
  };

  useEffect(() => {
    if (searchValue === "") {
      setData(filterData);
    } else {
      const temp = data.filter(
        (l) =>
          l.status.toLowerCase().includes(searchValue) ||
          l.type.toLowerCase().includes(searchValue)
      );
      setData(temp);
    }
  }, [searchValue]);

  const searchHandlerFtn = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <div className="bg-white">
      <Header
        header="spaceX"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, libero dolorum impedit, cum quis cumque doloribus incidunt voluptatibus, omnis natus at. Quam ex aut deleniti alias? Officiis dolor a corporis?"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5">
          <Search
            value={searchValue}
            onChange={searchHandlerFtn}
            labelName="Search by status and type"
          />
        </div>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMoreData}
          loader={<Loader />}
        >
          <div className="mb-24">
            <SpaceXGridComponent data={data} />
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
