import axios from "axios";
import { useEffect, useState } from "react";

const UseGetSingleProduct = () => {
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [user, setuser] = useState("");
  const [id, setid] = useState(1);
  const maxPhotos = 132;

  useEffect(() => {
    fetchsingleproduct();
  }, [id]);

  const fetchsingleproduct = async () => {
    try {
      const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      const data = response.data.photo;
      console.log(data);
      setimage(data.url);
      settitle(data.title);
      setdesc(data.description);
      setuser(data.user);
    } catch (err) {
      console.log(`Error occured: ${err}`);
    }
  };

  const handleNext = () => {
    setid((prev) => (prev >= maxPhotos ? 1 : prev + 1));
  };

  const handlePrevious = () => {
    setid((prev) => (prev == 1 ? 1 : prev - 1));
  };

  return{
    image,
    title,
    desc,
    user,
    handleNext,
    handlePrevious,
  };
};

export default UseGetSingleProduct;
