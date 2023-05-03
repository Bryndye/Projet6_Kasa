import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Fiche from "./components/FicheLogement";
import NotFound from "./components/Error";
import FicheDetail from "./assets/data.json";
// import {Home, About, Fiche, NotFound} from "./components/";

const Router = () => {
  const ficheRoutes = FicheDetail.map(fiche => (
    <Route key={fiche.id} path={`/fiche/${fiche.id}`} element={<Fiche id={fiche.id} />} />
  ));  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="test" element={<Fiche id="c67ab8a7" />} />
        {ficheRoutes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;