import React from "react";
import "./index.css";
import Particles from "./components/Particle/index";
import SectionAPOD from "./components/SectionAPOD/index";

function App() {
  return (
    <div className="container">
     <Particles />
     <SectionAPOD />
    </div>
  );
}

export default App;
