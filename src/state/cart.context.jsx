import { useState } from "react";
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
    const getCartQty = () => cart.reduce((acc, item) => acc + item.qty, 0);

    //precio total
    const getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.qty, 0);




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