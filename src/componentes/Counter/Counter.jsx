import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCartContext } from "../../state/cart.context";

export const Counter = ({ data, id }) => {

    //contexto
    const { cart, addProduct, cleanCart} = useCartContext();
    
    
    const [count, setContador] = useState(0);
    const [stock, setStock] = useState(data.stock);

        useEffect(() => {
            const encontrado = cart.find(producto => producto.id === id);
            if(!encontrado){
                setStock(data.stock);
            }
        }, [cart])

        console.log(stock);

    const handleContador = (e, operacion) => {
        e.preventDefault();

        if (stock === 0 && operacion === 'suma') return

        if (count <= 0 && operacion === 'resta') return

        if (operacion === 'suma' && count >= data.stock) return


        if (operacion === 'suma') {
            setContador(count + 1);
            setStock(stock - 1)
        } else {
            setContador(count - 1);
            setStock(stock + 1)
        }
    }


    const handleAdd = useCallback(
        (qty) => {
            addProduct(data, qty)
            setContador(0)
        }, [addProduct, data]);


    return (
        <>
            <div className="mt-5 space-y-6">
                <div>
                    <h3 className="text-sm font-medium text-gray-900">Stock</h3>
                    <span className="text-base text-gray-900">{stock}</span>
                </div>
            </div>

            <div className='flex flex-row justify-between'>

                <button
                    type="submit"
                    className="basis-1/4 mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={(e) => { handleContador(e, 'resta') }}
                    disabled={count === 1}
                >
                    -
                </button>


                <input className="basis-1/4 mt-10 text-center max-h-15 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    type="text" readOnly value={count} />

                <button
                    type="submit"
                    className="basis-1/4 mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={(e) => { handleContador(e, 'suma') }}
                >
                    +
                </button>


            </div>
            <button
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={
                    (e) => {
                        e.preventDefault()
                        handleAdd(count)
                    }
                }
            >
                Add to bag
            </button>
        </>
    )
}