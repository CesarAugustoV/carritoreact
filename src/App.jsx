import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import {
    NavBar, ProductoViews,
    ShoppingCart, Filters
} from './componentes';


export function App() {

    //Mostrar Carrito
    const [openCart, setOpenCart] = useState(false);
    const mostrarCarrito = () => setOpenCart(!openCart);

    //Mostrar producto
    const [productoSeleccionado, setProductoSeleccionado] = useState();
    const [openView, setOpenView] = useState(false);
    const mostrarProducto = (producto) => {
        setOpenView(!openView)
        setProductoSeleccionado(producto)
    };

    //carrito
    const [carrito, setCarrito] = useState([]);

    let cantidadCarrito = carrito.length;

    const agregarProductoCarrito = () => {
        const nuevoCarrito = [...carrito];
        const productoNuevo = nuevoCarrito.findIndex((p) => p.id === productoSeleccionado.id);
        
        if (productoNuevo < 0) {
            nuevoCarrito.push(productoSeleccionado)
            setCarrito(nuevoCarrito)
            setOpenView(!openView)
            return
        }

        nuevoCarrito[productoNuevo].quantity += 1;
        setCarrito(nuevoCarrito)
        setOpenView(!openView)
    }


    //actualizar precio del carrito
    const [precioTotal, setPrecioTotal] = useState(0);
    useEffect(() => {
        setPrecioTotal(carrito.reduce((ac, p) => {
            return ac += p.price * p.quantity
        }, 0))
    }, [carrito])

    cantidadCarrito = carrito.reduce((ac, p) => ac+= p.quantity , 0);


    return (
        <>
            {/* navbar */}
            <NavBar mostrarCarrito={mostrarCarrito} cantidadCarrito={cantidadCarrito} />
            {/* Carrito de compras */}
            <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} carrito={carrito} setCarrito={setCarrito} precioTotal={precioTotal} />
            {/* ver producto */}
            <ProductoViews openView={openView} setOpenView={setOpenView} productoSeleccionado={productoSeleccionado} agregarProductoCarrito={agregarProductoCarrito} />
            <Filters mostrarProducto={mostrarProducto}/>
        </>

    );
};