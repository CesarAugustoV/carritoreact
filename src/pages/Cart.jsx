import { useState } from "react";
import { Footer } from "../componentes/Footer/Footer";
import { useCartContext } from "../state/cart.context";
import { formatter } from "../usesCase/formatter";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { addOrder } from "../lib/orders.requests";
import { updateManyProductos } from "../lib/products.request";
import { useNavigate } from "react-router-dom";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Cart = () => {
    const navigate = useNavigate();

    const [agreed, setAgreed] = useState(false)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [rEmail, setREmail] = useState('');
    const [phone, setPhone] = useState('');



    const { cart, getTotalPrice, removeProduct, cleanCart } = useCartContext();

    const createOrder = async () => {

        // Validar campos requeridos
        if (!firstName || !lastName || !email || !rEmail || !phone) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }
        // Validar el formato del correo electrónico
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailPattern.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Validar que los correos electrónicos coincidan
        if (email !== rEmail) {
            alert('Los correos electrónicos no coinciden. Por favor, verifique.');
            return;
        }



        // Validar acuerdo con políticas
        if (!agreed) {
            alert('Debe aceptar nuestras políticas de privacidad para continuar.');
            return;
        }




        const items = cart.map(({ id, name, qty, price }) => ({ id, name, qty, price }))

        const order = {
            buyer: {
                firstName, lastName, email, phone
            },
            items,
            total: getTotalPrice
        }

        const id = await addOrder(order);

        await updateManyProductos(items);

        cleanCart();
        navigate(`/Invoice/${id}`);
    }

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
                    <>
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

                        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
                                <p className="mt-2 text-lg leading-8 text-gray-600">
                                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="remail" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Repeat Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="remail"
                                            id="remail"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setREmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="relative mt-2.5">
                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <label htmlFor="country" className="sr-only">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                            >
                                                <option>US</option>
                                                <option>CL</option>
                                                <option>EU</option>
                                            </select>
                                            <ChevronDownIcon
                                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                    <div className="flex h-6 items-center">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <Switch.Label className="text-sm leading-6 text-gray-600">
                                        By selecting this, you agree to our{' '}
                                        <a href="#" className="font-semibold text-indigo-600">
                                            privacy&nbsp;policy
                                        </a>
                                        .
                                    </Switch.Label>
                                </Switch.Group>
                            </div>
                            <div className="mt-10">
                                <button
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={createOrder}
                                >
                                    Create Order
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}