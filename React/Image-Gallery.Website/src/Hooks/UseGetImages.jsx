import { useEffect, useState } from 'react';
import axios from 'axios';

const UseGetImages = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await axios.get(
          `https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=${limit}`
        );
        setData(res.data.photos);
      } catch (err) {
        console.error('Error:', err);
      }
    };

    getImages();
  }, [limit]);

  return [data, setLimit];
};

export default UseGetImages;
