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
import { CityProvider } from "./hooks/CityContext";

function App() {
  return (
    <>
      <CityProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route index path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CityProvider>
    </>
  );
}

export default App;
