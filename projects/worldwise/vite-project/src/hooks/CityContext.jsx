import React, { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(function () {
    async function fetCities() {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetCities();
  }, []);

  function getCity(id) {
    async function fetchCity() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await response.json();
        console.log(data);
        setCity(data);
      } catch (err) {
        console.log("Error");
        setErrorMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCity();
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        errorMsg,
        city,
        getCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

function useCities() {
  const context = useContext(CityContext);

  if (context === undefined) {
    throw new Error("City Provider is being used outside of city context");
  }

  return context;
}

export { CityProvider, useCities };
