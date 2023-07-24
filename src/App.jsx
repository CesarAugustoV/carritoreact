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
import { NotFound } from './pages/notFound';



const routes = createBrowserRouter(createRoutesFromElements(
    <Route element={<NavBar />}>
        <Route path="/" element={<Home />}/>
        <Route path="/item/:id" element={<Details />}/>
        <Route path="/category/:id" element={<Category />}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
));



export function App() {
// TODO
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

    const agregarProductoCarrito = (event) => {
        event.preventDefault();
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

    cantidadCarrito = carrito.reduce((ac, p) => ac += p.quantity, 0);


    return (
        <>
            {/* Carrito de compras */}
            {/* <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} carrito={carrito} setCarrito={setCarrito} precioTotal={precioTotal} /> */}
            {/* routes */}
            <RouterProvider router={routes} />

            
        </>

    );
}