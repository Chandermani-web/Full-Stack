import React, {useState, useEffect} from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json); // ✅ Save products to state
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <main className="product-container">
        {product.length === 0 ? (
          <p>Loading...</p>
        ) : (
          product.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} />
              <div className="product-details">
                <h2>{item.title}</h2>
                <p className="desc">{item.description}</p>
                <p className="category">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="price">
                  <strong>Price:</strong> ${item.price}
                </p>
                <p className="rating">
                  <strong>Rating:</strong> {item.rating.rate} ⭐ (
                  {item.rating.count} reviews)
                </p>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Product;
