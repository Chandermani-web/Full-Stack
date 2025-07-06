import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutContextAPI from "./Components/AboutContextapi";
import Project from "./Components/Project";

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <h1>ContextAPI</h1>
          <ul>
            <li>
              <Link to="/project">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<AboutContextAPI />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2023 ContextAPI. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
