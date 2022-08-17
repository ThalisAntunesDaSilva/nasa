import React from "react";
import "./index.css";
import Particles from "./components/Particle/index";
import SectionApod from "./components/SectionAPOD/index";
import SectionMars from "./components/SectionMars/index";
import SectionEpic from "./components/SectionEpic/index";


function App() {
  return (
    <div className="container">
     <Particles />
     <h1 className="title-mars">Astronomy Picture of the Day</h1>
     <SectionApod />
     <SectionEpic />
     <SectionMars />
     
    </div>
  );
}

export default App;
