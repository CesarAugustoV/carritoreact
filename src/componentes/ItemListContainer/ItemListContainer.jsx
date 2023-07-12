import { formatter } from "../../usesCase/formatter"



export function ItemListContainer({mostrarProducto, products}) {


    const devolverProducto = (event, id) => {
        event.preventDefault();
        mostrarProducto(products.find((p) => p.id === id));
    }

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group relative z-0">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <button href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" onClick={(event) => devolverProducto(event, product.id)} />
                                    {product.name}
                                </button>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{formatter.format(product.price)}</p>
                    </div>
                </div>
            ))}
        </div>


    )
}
