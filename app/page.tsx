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

  const handleSearch = async (searchTerm) => {};
  const handleLocationSelect =  (locationData) => {};
  const loadWeatherData = async () => {};

  useEffect(() => {
    loadWeatherData();
  }, [location, units ])
  //useEffect, any time "location or units" change, the "loadWeatherData()" will activate again
  








  return (
  <>

  </>
  );
}
