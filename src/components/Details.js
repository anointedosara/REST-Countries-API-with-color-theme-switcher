"use client"
import Loading from "@/app/[details]/loading";
import { DataContext } from "@/contexts/DataContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

function Details() {
  const { data } = useContext(DataContext);
  const [detail, setDetail] = useState(() => {
    return sessionStorage?.getItem("detail");
    return null;
  });
  const filteredData = data?.filter(
    item => item?.name?.toLowerCase() === detail?.toLowerCase(),
  );
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Loading />;
    }
  return (
    <div className="w-full m-auto max-w-75 md:max-w-325">
      {filteredData?.map((item, i) => (
        <div className="flex flex-col items-center justify-between md:items-start lg:items-center md:flex-row" key={i}>
            <Image className="w-full lg:w-[42%] md:w-[50%] size-60 md:size-80 lg:size-100" src={item?.flags?.png} alt={item?.name} width={1000} height={1000} />
            <div className="w-full md:w-[40%] lg:w-[50%] mt-13 md:mt-0">
                <h3 className="text-[27px] md:text-[35px] font-bold text-gray-950 dark:text-white mb-6 lg:mb-5">{item?.name}</h3>
                <div className="flex flex-col lg:flex-row justify-between text-blue-900 text-[17px] dark:text-white">
                    <div>
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Native Name: </span>{item?.nativeName}</p>
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Population: </span>{item?.population?.toLocaleString()}</p>
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Region: </span>{item?.region}</p>
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Sub Region: </span>{item?.subregion}</p>
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Capital: </span>{item?.capital}</p>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Top Level Domain: </span>{item?.topLevelDomain}</p>
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Currencies: </span>{item?.currencies?.map(item => item?.name)?.join(", ")}</p>
                        <p className="mb-3 lg:mb-2"><span className="font-bold">Languages: </span>{item?.languages?.map(item => item?.name)?.join(", ")}</p>
                    </div>
                </div>
                <div className="flex items-left lg:items-center flex-col lg:flex-row text-blue-900 text-[14px] dark:text-white mt-8 lg:mt-15">
                    <span className="mr-5 mb-5 lg:mb-0 font-bold text-[17px]">Border Countries:</span> <div className="flex flex-wrap items-center">{item?.borders?.map((item, i) => <div className="px-5 py-1 mb-4 mr-2 rounded-md shadow-md dark:bg-blue-900" key={i}>{item}</div>)}</div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
