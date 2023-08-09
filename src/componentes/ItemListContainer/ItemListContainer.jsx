import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from '../../hooks/useQuery';
import { productsPromise } from '../../lib/products.request';
import { Item } from '../Item/Item'
import './ItemListContainer.css';


export function ItemListContainer({ id=null }) {

    const { data, loading } = useQuery(productsPromise, id);

    const [productos, setProductos] = useState([]);

    const cantidadEsqueleto = 8;

    useEffect(() => {
        if (loading) {
            const esqueleto = new Array(cantidadEsqueleto).fill("loading");
            setProductos(esqueleto)
            return
        }
        setProductos(data)
    }, [loading])


    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
                productos?.map((product, i) => {
                    return <Item key={!product.id ? i : product.id} id={product.id} imageSrc={product.imageSrc} imageAlt={product.imageAlt} href={product.href} name={product.name} subtitulo={product.subtitulo} price={product.price} />
                })}
        </div>

    )
}
