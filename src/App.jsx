import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-full h-screen mx-auto bg-blue text-white">
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;
