import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [image, setImage] = useState("");
  const indexRef = useRef(0);

  const images = [
    "https://images.pexels.com/photos/30507367/pexels-photo-30507367.jpeg",
    "https://images.pexels.com/photos/31241763/pexels-photo-31241763.jpeg",
    "https://images.pexels.com/photos/32529987/pexels-photo-32529987.jpeg",
    "https://images.pexels.com/photos/32842458/pexels-photo-32842458.jpeg",
    "https://images.pexels.com/photos/19196517/pexels-photo-19196517.jpeg",
  ];

  const handleChange = () => {
    setImage(images[indexRef.current]);
    indexRef.current = (indexRef.current + 1) % images.length;
  };

  return (
    <>
      <div>
        <h1>Image Changer</h1>
        <p>Click the button to change the image</p>
        <button onClick={handleChange}>Change image</button>
      </div>
      {image && <img src={image} alt="Random" />}
    </>
  );
};

export default App;
