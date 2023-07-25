import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import { productsPromise } from '../../lib/products.request';
import { Item } from '../Item/Item'
import './ItemListContainer.css';


export function ItemListContainer({ id }) {
    
    const { data, loading } = useQuery(productsPromise, id);
    
    if (loading) {
        return <div>Cargando...</div>
    }



    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data?.map((product) => (
                <Item key={product.id} id={product.id} imageSrc={product.imageSrc} imageAlt={product.imageAlt} href={product.href} name={product.name} color={product.color} price={product.price} />
            ))}
        </div>




    )
}
