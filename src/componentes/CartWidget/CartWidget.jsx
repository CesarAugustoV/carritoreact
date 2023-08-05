import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import { useState } from 'react';
import { useCartContext } from '../../state/cart.context'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';



export function CartWidget() {
    const [openCart, setOpenCart] = useState(false);

    const {getCartQty} = useCartContext();


    return (
        <div className="ml-4 flow-root lg:ml-6">
            <button href="#" className="group -m-2 flex items-center p-2" onClick={()=>setOpenCart(!openCart)}>
                <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{getCartQty()}</span>
                <span className="sr-only">items in cart, view bag</span>
                <ShoppingCart openCart={openCart} setOpenCart={setOpenCart}/>
            </button>
        </div>
    )
}