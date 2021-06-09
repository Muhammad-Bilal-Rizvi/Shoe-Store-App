import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { ProductDetails } from './Components/ProductDetails';
import { ProductIndex } from './Components/ProductIndex';
import { NotFound } from './Components/NotFound'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}>
            <Route path="/" element={<ProductIndex />}></Route>
            <Route path=":productId" element={<ProductDetails />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
