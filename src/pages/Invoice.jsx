import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { getOrder } from "../lib/orders.requests";
import { NavLink } from 'react-router-dom'

export function Invoice() {
    const { id } = useParams();

    const { data, loading } = useQuery(getOrder, id);

    if(!data){
        return
    }

    // Utiliza el valor de id en tu componente
    return (
        <>
            <div className="mx-auto mt-6 max-w-xl sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900 text-center">Invoice</h3>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Id</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{id}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.buyer.firstName + ' ' + data.buyer.lastName}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.buyer.phone}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.buyer.email}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Precio: </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${data.total}</dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    
                        <NavLink
                            href="#"
                            to="/"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Volver al inicio.
                        </NavLink>
                    </div>
            </div>
        </>
    );
}