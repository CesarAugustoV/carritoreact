import { formatter } from "../../usesCase/formatter"
import {Item} from '../Item/Item'


export function ItemListContainer({products, mostrarProducto}) {
    const devolverProducto = (event, id) => {
        event.preventDefault();
        mostrarProducto(products.find((p) => p.id === id));
    }

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                    <Item devolverProducto={devolverProducto} key={product.id} id={product.id} imageSrc={product.imageSrc} imageAlt={product.imageAlt} href={product.href} name={product.name} color={product.color} price={product.price}/>
            ))}
        </div>


    )
}
