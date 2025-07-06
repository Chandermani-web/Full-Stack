import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Product from "./Components/Product.jsx";
import Post from "./Components/Post.jsx";
import Carts from "./Components/Carts.jsx";

const Navigation = ({ onNavigate }) => (
  <header>
    <nav>
      <h1>Backend practice</h1>
      <ul>
        <li><button onClick={() => onNavigate("/")}>Products</button></li>
        <li><button onClick={() => onNavigate("/posts")}>Posts</button></li>
        <li><button onClick={() => onNavigate("/carts")}>Carts</button></li>
      </ul>
    </nav>
  </header>
);

const AppRoutes = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const delayedNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1000); // 1 second delay
  };

  return (
    <>
      <Navigation onNavigate={delayedNavigate} />
      {loading && <div className="loader">Loading...</div>}
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
      <footer>
        <p>&copy; 2023 Backend Practice</p>
      </footer>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
