import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import {
    NavBar, ProductoViews,
    ProductList, TransitionMobile,
    Filtros, ShoppingCart, Barra, Filters
} from './componentes';





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
        price: 10,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Negro',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 2,
        name: 'Camiseta estilo',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 15,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Blanca',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 3,
        name: 'Camiseta gris',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 15,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Gris',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 4,
        name: 'Camiseta figura',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 18,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Multicolor',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 5,
        name: 'Bolso de mano',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 30,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Azul',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 6,
        name: 'Cartera',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 35,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Gris',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 7,
        name: 'Bolso pequeño',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 28,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Salmon',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 8,
        name: 'Catera estilo',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 38,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Amarillo',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    },
    {
        id: 9,
        name: 'Camisetas basicas 6-pack',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        price: 99,
        quantity: 1,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Multicolor',
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
        ],
        sizes: [
            { name: 'XXS', inStock: true },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
            { name: 'XXXL', inStock: false },
        ]
    }
    // More products...
]




export function App() {

    //filtros
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    //Mostrar Carrito
    const [openCart, setOpenCart] = useState(false);
    const mostrarCarrito = () => setOpenCart(!openCart);

    //Producto Seleccionado
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    //Mostrar producto
    const [openView, setOpenView] = useState(false);
    const mostrarProducto = (id) => {
        setOpenView(!openView)
        setProductoSeleccionado(products.find((p) => p.id === id))
    };

    //carrito
    const [carrito, setCarrito] = useState([]);
    const cantidadCarrito = carrito.length;
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

    const [precioTotal, setPrecioTotal] = useState(0);
    useEffect(() => {
        setPrecioTotal(carrito.reduce((ac, p) => {
            return ac += p.price * p.quantity
        }, 0))
    }, [carrito])

    return (
        <>
            {/* navbar */}
            <NavBar mostrarCarrito={mostrarCarrito} cantidadCarrito={cantidadCarrito} />
            {/* Carrito de compras */}
            <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} carrito={carrito} precioTotal={precioTotal} />
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
                                    <ProductList products={products} mostrarProducto={mostrarProducto} />
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            {/* ver producto */}
            <ProductoViews openView={openView} setOpenView={setOpenView} productoSeleccionado={productoSeleccionado} agregarProductoCarrito={agregarProductoCarrito} />
        </>

    );
};