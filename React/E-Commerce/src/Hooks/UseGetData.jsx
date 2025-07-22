import React, { useEffect, useState } from "react";

const UseGetData = () => {
  const [Data, setData] = useState([]);

  const fetchproduct = async () => {
    try {
      const response = await fetch("https://fackstoreapi.in/api/products?limit=149");
      const data = await response.json();
      console.log(data);
      const products = data.products;
      setData(products);
    } catch (error) {
      console.log(`Error Occured: ${error}`);
    }
  };

  useEffect(()=>{
    fetchproduct()
  },[]);

  return Data;
};

export default UseGetData;
