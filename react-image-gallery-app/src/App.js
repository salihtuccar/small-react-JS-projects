import React, { useState } from "react";
import images from "./images";
import "./styles.css";
const App = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="app">
      <div className="container">
        <img src={selectedImage} alt="selected" className="selected" />
      </div>
      <div className="imgContainer">
        {images.map((img, index) => (
          <img src={img} key={index} onClick={() => setSelectedImage(img)} />
        ))}
      </div>
    </div>
  );
};

export default App;
