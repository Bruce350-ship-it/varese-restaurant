import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Menu, Contact } from "./pages";

function App() {
  return (
    <div className="font-serif">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;