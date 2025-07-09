import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Image.css'
import "remixicon/fonts/remixicon.css"

const Image = () => {
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [user, setuser] = useState("");
  const { id } = useParams(); // ✅ use directly
  const maxPhotos = 132;
  const navigate = useNavigate();

  useEffect(() => {
    fetchsingleproduct();
  }, [id]);

  const fetchsingleproduct = async () => {
    try {
      const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}` // ✅ use id
      );
      const data = response.data.photo;
      setimage(data.url);
      settitle(data.title);
      setdesc(data.description);
      setuser(data.user);
    } catch (err) {
      console.log(`Error occurred: ${err}`);
    }
  };

  const handleNext = () => {
    const nextId = Number(id) >= maxPhotos ? 1 : Number(id) + 1;
    window.location.href = `/gallery/${nextId}`; // ✅ simple route jump
  };

  const handlePrevious = () => {
    const prevId = Number(id) <= 1 ? 1 : Number(id) - 1;
    window.location.href = `/gallery/${prevId}`;
  };

  return (
    <div className="image-detail-api-container">
      <button onClick={()=>{
        navigate("/gallery");
      }}
      className="btg-btn"
      ><i className="ri-arrow-left-line"></i> Back to Gallery</button>
      <main className="imagedetails">
        <section className="imagedetail-title">
          <p><strong>Title: </strong>{title}</p>
        </section>
        <section>
          <p><strong>Desc: </strong>{desc}</p>
        </section>
        <section>
          <p><strong>User: </strong>{user}</p>
        </section>
      </main>
      <main className="container">
        <img src={image} alt="" className="gallery-id-image" />
        <div className="btn">
          <button className="prev-next-btns" onClick={handlePrevious}>Previous</button>
          <button className="prev-next-btns" onClick={handleNext}>Next</button>
        </div>
      </main>
    </div>
  );
};

export default Image;
