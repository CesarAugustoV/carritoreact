import { useState } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { createContext } from "react";


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    //añadir producto
    const addProduct = (item, qty) => {
        const element = cart.find((product) => product.id === item.id);

        if (!element) return setCart([...cart, { ...item, qty, }])

        const newCart = cart.map((product) => {
            if (product.id === item.id) {
                return { ...product, qty: product.qty + qty };
            }
            return product;
        });

        setCart(newCart)
    };

    //eliminar
    const removeProduct = (id) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
    }

    //vaciar carrito
    const cleanCart = () => setCart([]);

    //consultar numero de productos
    //useMemo cambia la funcion por un valor. funciona como un useEffect
    const getCartQty = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0),[cart]);

    //precio total
    const getTotalPrice = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.qty, 0),[cart]);




    const value = {
        cart,
        addProduct,
        getCartQty,
        removeProduct,
        cleanCart,
        getTotalPrice
    }


    return (
        <CartContext.Provider
            value={value}
            displayName="CartContext">
            {children}
        </CartContext.Provider>)
}