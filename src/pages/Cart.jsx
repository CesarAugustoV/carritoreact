import { Footer } from "../componentes/Footer/Footer";
import { useCartContext } from "../state/cart.context";
import { formatter } from "../usesCase/formatter";

export const Cart = () => {
    const { cart, getTotalPrice, removeProduct, cleanCart } = useCartContext();

    return (
        <>
            <div className="mx-auto mt-6 max-w-xl sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900">Carrito</h1>
                <div className="mt-8">

                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href={product.href}>{product.name}</a>
                                                </h3>
                                                <p className="ml-4">{formatter.format(product.price * product.qty)}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Qty {product.qty}</p>

                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    onClick={() => removeProduct(product.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {cart.length === 0 ? <div className="m-10 text-center"><h1>No hay productos en el inventario.</h1></div> : (
                        <div className="mb-10">
                            <button
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={cleanCart}
                                disabled={cart.length === 0}
                            >
                                Vaciar
                            </button>

                            <div className="mt-5 border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>{formatter.format(getTotalPrice)}</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            </div>
                        </div>
                )}
            </div>
            <Footer />
        </>
    )
}