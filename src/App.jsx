// npm i react-router-dom
// npm i firebase

import React from "react";
// import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import defined useContext content
import { AuthContextProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Questions from "./components/Questions";

import "./App.css";

function App() {
  return (
    <div>
      
      {/* Provider of useContext hook */}
      <AuthContextProvider>
        <Router>
          {/* Navbar adaptive according login status */}
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/questions" element={<Questions/>} />
      
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
