import React, { useState, useEffect } from "react";
import api from "../../services/api";
import NavBar from "../MaterialUI/NavBar/index";

import "./styles.css";

function SectionAPOD() {
  const [apod, setApod] = useState([]);

  async function handleApod() {
    try {
      const response = await api.get(
        "/apod?api_key=Sfn26124UBii8hu6gtLEuXwN7Fc6Yms79Macy9vu"
      );
      const data = response.data;

      console.log(data.url);
      setApod(response.data);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    handleApod();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="container-geral">
          <div className="container-image">
            <img src={apod.url} className="picture-image" />
          </div>
          <div className="container-text">
            <h1>{apod.title}</h1>
            <span>{apod.explanation}</span> <br />
            <br />
            <span>Photo taken at: {apod.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionAPOD;
