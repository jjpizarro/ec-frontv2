import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function MisRutas(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
        </Routes>
    );

}