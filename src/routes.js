import React from "react";
import SectionAPOD from "./components/SectionAPOD/index";
import Earth from "./components/Earth/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SectionAPOD />} />
        <Route path="/earth" exact element={<Earth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
