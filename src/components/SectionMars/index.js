import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";

function SectionMars() {
  const [mars, setMars] = useState([]);

  async function handleApod() {
    try {
      const response = await api.get(
        "mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=Sfn26124UBii8hu6gtLEuXwN7Fc6Yms79Macy9vu"
      );
      const data = response.data.photos;
      

      setMars(data);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    handleApod();
  }, []);

  return (
    <div className="container-mars">
      <h1 className="title-mars">Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars </h1>
      <ul className="grid-container">
        {mars.map(item => (
          <div class="grid-item">
            <h1>{}</h1>
            <img src={item.img_src} className="picture-image"/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SectionMars;
