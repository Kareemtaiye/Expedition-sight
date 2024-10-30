import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/City/CityList";
import City from "./components/City/City";
import CountryList from "./components/Country/CountryList";
import Form from "./components/Form/Form";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      AOO
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              index
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities/:id"
              element={<City cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="countries"
              element={<CountryList isLoading={isLoading} cities={cities} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
