import React from "react";
import Header from "./components/header";
import AboutUs from "./components/AboutUs";
import Voiti from "./components/Voiti";
import YourAccount from "./components/Youraccount";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import Registration from "./components/Registration";

const App = () => {
  // Массив с данными об играх
  const currentLocation = useLocation();

  return (
    <>
      <Header location={currentLocation} />
      <Routes>
        <Route>
          <Route path="/" element={<Layout />} />
          <Route path="/signin" element={<Voiti />} />
          <Route path="/youracc" element={<YourAccount />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
