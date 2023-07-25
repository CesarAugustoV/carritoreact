import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import {
    NavBar
} from './componentes';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';



const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<NavBar />}>
        <Route path="/" element={<Home />}/>
        <Route path="/item/:id" element={<Details />}/>
        <Route path="/category/:id" element={<Category />}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
));



export function App() {

    return (
        <>
            {/* Carrito de compras */}
            {/* <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} carrito={carrito} setCarrito={setCarrito} precioTotal={precioTotal} /> */}
            {/* routes */}
            <RouterProvider router={routes} />

            
        </>

    );
}