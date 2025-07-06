import React, { useEffect, useState } from "react";

const Carts = () => {
  const [carts, setcarts] = useState([]);

  const getcarts = () => {
    fetch("http://localhost:8000/api/carts")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setcarts(json);
      });
  };

  useEffect(() => {
    getcarts();
  }, []);

  return (
    <div className="carts-wrapper">
      <h1>Carts List</h1>
      <main className="carts-container">
        {carts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          carts.map((item) => (
            <div key={item.id} className="cart-card">
              <h2><strong>UserID:</strong> {item.userId}</h2>
              <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
              <div className="product-list">
                <strong>Products:</strong>
                <ul>
                  {item.products.map((product, index) => (
                    <li key={index}>
                      Product ID: {product.productId}, Quantity: {product.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Carts;
