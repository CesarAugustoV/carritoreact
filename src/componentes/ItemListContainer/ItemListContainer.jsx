import { useEffect } from 'react';
import { useState } from 'react';
import { productsPromise } from '../../lib/products.request';
import {Item} from '../Item/Item'


export function ItemListContainer({id}) {
        // lista de productos
        const [products, setProducts] = useState([]);

        useEffect(() => {
            productsPromise(id)
                .then(res => setProducts(res))
        }, [id])


    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                    <Item key={product.id} id={product.id} imageSrc={product.imageSrc} imageAlt={product.imageAlt} href={product.href} name={product.name} color={product.color} price={product.price}/>
            ))}
        </div>


    )
}
