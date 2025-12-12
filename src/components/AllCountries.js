"use client";
import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function AllCountries() {
  const { data } = useContext(DataContext);
  return (
    <div className="grid w-full gap-10 pb-8 m-auto max-w-75 md:max-w-full grid-cols md:grid-cols-3 lg:grid-cols-4 md:gap-10 lg:gap-17">
      {data.map((item, i) => (
        <Link
          onClick={() => {
            sessionStorage.setItem("detail", item.name);
          }}
          href={`/${item.name}`}
          className="overflow-auto bg-white rounded-md shadow-md dark:bg-blue-900"
          key={i}
        >
          <Image
            className="w-full size-40"
            src={item?.flags?.png}
            alt={item.name}
            width={1000}
            height={1000}
          />
          <div className="p-6 pb-10 text-blue-900 text-[15px] dark:text-white">
            <h2 className="text-[18px] font-bold text-gray-950 dark:text-white mb-3 ">
              {item.name}
            </h2>
            <p className="mb-1">
              <span className="font-medium">Population:</span>{" "}
              {item.population.toLocaleString()}
            </p>
            <p className="mb-1">
              <span className="font-medium">Region:</span> {item.region}
            </p>
            <p className="mb-1">
              <span className="font-medium">Capital:</span> {item.capital}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AllCountries;
