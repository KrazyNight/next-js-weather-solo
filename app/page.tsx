"use client"

import React from 'react';
import Image from "next/image";
import Header from '@/components/Header';
import Search from '@/components/Search';
import CurrentWeather from '@/components/CurrentWeather';
import Metrics from '@/components/Metrics';
import DailyForecast from '@/components/DailyForecast';
import HourlyForecast from '@/components/HourlyForecast';
import LoadingState from '@/components/LoadingState';

import errorIcon from "../assets/images/icon-error.svg";
import loadingIcon from "../assets/images/icon-loading.svg";
import retryIcon from "../assets/images/icon-retry.svg";

import { useState, useEffect } from "react";
//import { fetchWeatherData, fetchLocationData } from "../lib/utils";


export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    name: "Berlin",
    lat: 52.52,
    lon: 13.405,
  });
  const [units, setUnits] = useState("metric");
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // const handleSearch = async (searchTerm) => {};
  // const handleLocationSelect =  (locationData) => {};
  const loadWeatherData = async () => {};

  useEffect(() => {
    loadWeatherData();
  }, [location, units ]);
  //useEffect, any time "location or units" change, the "loadWeatherData()" will activate again

  const toggleUnits = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  // if (initialLoading) {
  //   return <LoadingState />
  // }










  return (
  <>
  <div className="min-h-screen text-white">
    <div className="container mx-auto px-4 py-6 max-w-7xl">

      <Header units={units} onToggleUnits={toggleUnits} />
      <div className='text-center mb-8'>
        <h1 className='text-3xl md:text-5xl font-bold mb-16  '>
          How's the sky looking today?
        </h1>
        <Search />
        {/* <Search
            onSearch={handleSearch}
            loading={loading}
            searchResults={searchResults}
            showSearchResults={showSearchResults}
            onLocationSelect={handleLocationSelect}
            onCloseResults={() => setShowSearchResults(false)}
          /> */}
      </div>

{/* { weatherData ? */}

       {/* <>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className='lg:col-span-2 space-y-6 ' >
          <CurrentWeather />
          <Metrics /> 
          <DailyForecast />

        </div>
       <div className='lg:col-span-1'>
        <HourlyForecast />
       </div>
       </div>
       </>  */}

       {/* : */}

       <>
       <div className="flex flex-col items-center text-center max-w-lg mx-auto space-y-4 py-12">
            <Image src={errorIcon} alt="Error" className="block mx-auto size-10" />
            <h2 className="text-4xl font-bold">Something went wrong</h2>
            <p className="text-gray-400">
              We couldn't connect to the server (API error). Please try again in a few moments.
            </p>
            <button
              onClick={loadWeatherData}
              className="flex items-center justify-center space-x-2 glass-card px-5 py-2.5 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium"
            >
              <Image src={retryIcon} alt="" className="mr-2 size-4" />
              <span>Retry Connection</span>
            </button>
        </div>

       </>

{/* } */}


      
    </div>
    

   



    
  </div>
  
  </>
  );
}
