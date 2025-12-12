'use client'
import Navbar from "@/components/Navbar";
import "./globals.css";
import { DataContext } from "@/contexts/DataContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState('');

  const handleName = (e) => {
    setName(e.target.value.toLowerCase());
  };

  const getAll = async () => {
    try {
      const response = await axios.get("/data.json");
      setData(response.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const getSearch = (allData) => {
    if (!name) return allData;

    return allData.filter((item) =>
      item.name.toLowerCase().includes(name)
    );
  };

  const getRegionFilter = (allData) => {
    if (!region) return allData;

    return allData.filter((item) =>
      item.region.toLowerCase().includes(region.toLowerCase())
    );
  };

  const applyFilters = async () => {
    const response = await axios.get("/data.json");
    let results = response.data;

    results = getSearch(results);
    results = getRegionFilter(results);
    
    setData(results);
  };

  useEffect(() => {
    applyFilters();
  }, [name, region]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-blue-950">
        <DataContext.Provider
      value={{
        name,
        handleName,
        region,
        setRegion,
        data,
        detail,
      }}
    ><Navbar />
        {children}
        </DataContext.Provider>
        
      </body>
    </html>
  );
}
