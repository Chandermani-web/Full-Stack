import React, { useEffect, useState } from "react";
import "./App.css";
import Skeleton from "./Components/Skeleton.jsx";

const App = () => {
  const [mode, setmode] = useState("light");
  const [photos, setPhotos] = useState([]);
  const [filterphotos, setfilterphotos] = useState([]);
  const [message, setMessage] = useState("");
  const [input, setinput] = useState("");

  const fetchdata = async () => {
    try {
      const res = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=132");
      const json = await res.json();

      if (json.success) {
        setPhotos(json.photos);
        setfilterphotos(json.photos);  // also set filtered data initially
        setMessage(json.message);
      } else {
        setMessage("Failed to fetch data.");
      }
    } catch (err) {
      console.log(`Error Occurred : ${err}`);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setmode(newMode);
    document.body.style.backgroundColor = newMode === "light" ? "white" : "#121212";
    document.body.style.color = newMode === "light" ? "black" : "white";
  };

  const handleinput = (e) => {
    const value = e.target.value.toLowerCase();
    setinput(value);
    const filtered = photos.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setfilterphotos(filtered);
  };

  if (photos.length === 0) {
    return <Skeleton />;
  }

  return (
    <div className={`container ${mode}`}>
      <header>
        <nav>
          <h1>Photo Gallery</h1>
          <input
            type="text"
            placeholder="Search by title..."
            value={input}
            onChange={handleinput}
          />
          <ul>
            <li>Home</li>
            <li>About</li>
            <button onClick={toggleMode}>
              {mode === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </ul>
        </nav>
      </header>

      <main>
        <p className="message">{message}</p>
        <div className="gallery">
          {filterphotos.map((photo) => (
            <div className="card" key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <div className="card-details">
                <h3>{photo.title}</h3>
                <p><strong>User:</strong> {photo.user}</p>
                <p className="desc">{photo.description || "No description available."}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
