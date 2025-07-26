import React, { useEffect, useState } from "react";

const UseGetData = () => {
  const [Data, setData] = useState([]);
  const [id , setId] = useState(149);
  const fetchproduct = async () => {
    try{
      const response = await fetch(`https://fakestoreapi.in/api/products?limit=${id}`);
      const data = await response.json();
      console.log(data);
      const products = data.products;
      setData(products);
    }catch(err){
      console.log(`Error Occured : ${err}`);
    }
  };

  useEffect(()=>{
    fetchproduct()
  },[id]);

  return { Data , id , setId };
};

export default UseGetData;
