import axios from "axios";
import '@emotion/react';
import React, { useState, useEffect } from "react";
import ProductDetailPage from "./Pages/ProductDetail";
import ProductCatalogPage from "./Pages/ProductCatalogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [products, setProducts] = useState([]);

  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ProductCatalogPage/>}></Route>
      <Route path="/product-detail/:id" element={<ProductDetailPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;