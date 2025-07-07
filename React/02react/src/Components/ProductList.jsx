import React from "react";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import productlist from "./products.jsx";
const ProductList = () => {
    const navigate = useNavigate();

  const [filterproduct, setfilterproduct] = useState(productlist);

  const searchitem = (e) => {
    const value = e.target.value.toLowerCase();
    setfilterproduct(
      productlist.filter((fil) => fil.title.toLowerCase().includes(value))
    );
  };

  const handleclick = (id) => {
    navigate(`/product/${id}`)
  };

  const Product = ({ product, onclick }) => {
    return (
      <div className="product-card" onClick={onclick}>
        <img src={product.image} alt={product.title} />
        <div className="product-details">
          <h2>{product.title}</h2>
          <p className="desc">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <p className="rating">
            Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🛍️ ShopEase</div>
        <div className="search-box">
          <input type="text" placeholder="Search.. " onChange={searchitem} />
          <i className="ri-search-line"></i>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Product Grid */}
      <main className="product-container">
        {filterproduct.map((item) => (
          <Product key={item.id} product={item} onclick={() => handleclick(item.id)} />
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default ProductList;
