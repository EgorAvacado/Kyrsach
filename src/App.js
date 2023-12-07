import React from "react";
import Header from "./components/header";
import AboutUs from "./components/AboutUs";
import GameFrame from "./components/Gamefreames";
//import GamePage from './components/gamepage';
import { Routes, Router, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";

const App = () => {
  // Массив с данными об играх

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
};

export default App;
