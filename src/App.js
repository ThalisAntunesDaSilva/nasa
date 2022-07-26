import React from "react";
import "./index.css";
import Particles from "./components/Particle/index";
import Router from "./routes"


function App() {
  return (
    <div className="container">
     <Particles />
     <Router />
    </div>
  );
}

export default App;
