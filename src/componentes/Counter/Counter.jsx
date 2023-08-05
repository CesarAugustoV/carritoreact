import { useState } from "react";
import { useCartContext } from "../../state/cart.context";

export const Counter = ({ data }) => {
    const [count, setContador] = useState(1);
    const handleContador = (e, operacion) => {
        e.preventDefault();

        if (count === 1 && operacion === 'resta') return
        operacion === 'suma' ? setContador(count + 1) : setContador(count - 1);
    }

        //contexto
        const { addProduct } = useCartContext();

        const handleAdd = ((qty) => {
            addProduct(data, qty);
        });

    return (
        <>
            <div className='flex flex-row justify-between'>

                <button
                    type="submit"
                    className="basis-1/4 mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={(e) => { handleContador(e, 'resta') }}
                    disabled={count===1}
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