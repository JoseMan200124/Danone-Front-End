import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modules/Navbar'; 
import Profile from './pages/Profile';
import Products from './pages/Products';
import Calories from './pages/Calories';
import HomePage from './pages/HomePage'; 
import Footer from './modules/Footer';
import DetailProduct from "./pages/DetailProduct";
function App() {
  return (
    <div className="font-sans">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/product/:id" element={<DetailProduct />} /> // Utiliza el parámetro dinámico :id

        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
