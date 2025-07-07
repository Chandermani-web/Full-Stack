import React from "react";
import "./App.css";
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>  
          <Route path="/" element={<ProductList />}></Route>  
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>  
      </Router>  
    </div>
  );
};

export default App;
