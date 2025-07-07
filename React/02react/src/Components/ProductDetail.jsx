import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productlist from "./products.jsx";
import "remixicon/fonts/remixicon.css";

const ProductDetail = () => {
  const [count, setcount] = useState(0);

  const { id } = useParams();
  const product = productlist.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not found ...</h2>;
  return (
    <div>
      <div className="product-detail">
        <div className="product-detail-child">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail-child">
          <h2>{product.title}</h2>
          <p className="desc">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <p className="rating">
            Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
          </p>
          <div className="count">
            <i
              className="ri-add-large-line"
              onClick={() => setcount(count + 1)}
            ></i>
            <span>{count}</span>
            <i
              className="ri-subtract-line"
              onClick={() => setcount(count > 0 ? count - 1 : 0)}
            ></i>
          </div>

          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
