import React from 'react'
import './App.css'
import { ShoppingCart } from './componentes'
import { useState } from 'react';
import Filtros from './componentes/Filtros/Filtros';
import Barra from './componentes/Barra/Barra';
import TransitionMobile from './componentes/Filtros/TransitionMobile';
import ProductList from './componentes/ProductList/ProductList';
import ProductoViews from './componentes/productoViews/productoViews';
import { NavBar } from './componentes';


const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'blanco', label: 'Blanco', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'azul', label: 'Azul', checked: true },
            { value: 'marron', label: 'Marron', checked: false },
            { value: 'verde', label: 'Verde', checked: false },
            { value: 'purpura', label: 'Purpura', checked: false },
        ],
    },
    {
        id: 'categoria',
        name: 'Categoria',
        options: [
            { value: 'nuevo', label: 'Nuevos productos', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'bolsos', label: 'Bolsos', checked: true },
            { value: 'cateras', label: 'Carteras', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'tamaño',
        name: 'Tamaño',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    }
]

const subCategories = [
    { name: 'Camiseta', href: '#' },
    { name: 'Bolsos', href: '#' },
    { name: 'Zapatos', href: '#' },
    { name: 'Fundas portatiles', href: '#' },
    { name: 'Accesorios', href: '#' },
]

const products = [
    {
        id: 1,
        name: 'Camiseta basica',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$25',
        color: 'Negro',
    },
    {
        id: 2,
        name: 'Camiseta estilo',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Blanca',
    },
    {
        id: 3,
        name: 'Camiseta gris',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$20',
        color: 'Gris',
    },
    {
        id: 4,
        name: 'Camiseta figura',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$40',
        color: 'Multicolor',
    },
    {
        id: 5,
        name: 'Bolso de mano',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$40',
        color: 'Azul',
    },
    {
        id: 6,
        name: 'Cartera',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$43',
        color: 'Gris',
    },
    {
        id: 7,
        name: 'Bolso pequeño',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$30',
        color: 'Salmon',
    },
    {
        id: 8,
        name: 'Catera estilo',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$50',
        color: 'Amarillo',
    }
    // More products...
]


export function App() {
    //filtros
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    //Carrito
    const [open, setOpen] = useState(true);

    const mostrarCarrito = () => {
        setOpen(!open);
    }

    return (
        <>
            {/* navbar */}
            <NavBar mostrarCarrito={mostrarCarrito}/>
            {/* Carrito de compras */}
            <ShoppingCart open={open} setOpen={setOpen} />
            {/* Seccion Principal */}
            <div className='bg-white'>
                <div>
                    {/* transicion de pantalla mobile */}
                    <TransitionMobile filters={filters} subCategories={subCategories} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
                    {/* display */}
                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Barra titulo */}
                        <Barra setMobileFiltersOpen={setMobileFiltersOpen} />
                        {/* display, filtros y lista de productos */}
                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">
                                Productos
                            </h2>
                            {/* filtros */}
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                <Filtros filters={filters} subCategories={subCategories} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
                                {/* lista de productos */}
                                <div className="lg:col-span-3">
                                    <ProductList products={products} />
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <ProductoViews />
        </>

    );
};