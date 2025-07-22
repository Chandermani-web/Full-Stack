import React from "react";
import UseGetData from "../../Hooks/UseGetData.jsx";
import { useNavigate } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton.jsx";

const ShowProducts = ({ product, onClick }) => {
  return (
    <div onClick={onClick} className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">

        {
            product.popular === true && (
                <span className="absolute top-3 left-3 bg-black text-whtie text-s, px-3 py-1 rounded-md z-10">
                    🔥 Trending
                </span>
            )
        }

        <img src={product.image} alt={product.title} className='h-60 w-60 m-auto object-cover' />

        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h2>
            <p className="text-sm text-gray-500 mb-1"></p>
        </div>

    </div>
  )
};

const Products = () => {
  const Data = UseGetData();
  console.log(Data);

  const navigate = useNavigate();

  const handleNavigate = ({ id }) => {
    navigate("/show/product");
  };

  return (
    <div>
      {Data.length === 0 ? (
        <div>
          <Skeleton />
        </div>
      ) : (
        <div>
          {Data.map((product) => (
            <ShowProducts
              key={product.id}
              product={product}
              onClick={() => handleNavigate(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
