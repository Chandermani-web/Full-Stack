import React from "react";
import UseGetImages from "../Hooks/UseGetImages.jsx";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [images, setLimit] = UseGetImages();
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/gallery/${id}`); // ✅ Make sure path matches route
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="text-center text-4xl font-bold">Image Gallery</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" , padding: "20px 60px"}}>
        {images.map((item) => (
          <div
            key={item.id}
            style={{
              width: "250px",
              border: "1px solid #ccc",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleNavigate(item.id)} // ✅ CLICK TRIGGERS THIS
          >
            <img
              src={item.url}
              alt={item.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="bg-green-400 p-3"
          onClick={() => setLimit((prev) => prev + 10)}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
