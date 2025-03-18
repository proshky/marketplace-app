import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import ProductCardContainer from './components/ProductCard/ProductCardContainer';
import {Route, Routes, Navigate } from "react-router-dom";


let App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <div className='wrapperActivePage'>
                <Routes>
                    <Route path='/' element={<Navigate to="/products" />} />
                    <Route path='/products' element={<ProductsContainer/>}/>
                    <Route path='/productCard/:id' element={<ProductCardContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App


