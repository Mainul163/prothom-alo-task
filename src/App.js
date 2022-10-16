import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import "./assets/styles/molecules.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:type/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
