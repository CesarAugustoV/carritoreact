import { ScaleLoader } from 'react-spinners';
import { useQuery } from '../../hooks/useQuery';
import { productsPromise } from '../../lib/products.request';
import { Item } from '../Item/Item'
import './ItemListContainer.css';


export function ItemListContainer({ id }) {
    
    const { data, loading } = useQuery(productsPromise, id);
    console.log(data);

    
    if (loading) {
        return <div style={{position: 'fixed', top: "0", left: "10%", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center",}}><ScaleLoader color="#36d7b7" size={100}  cssOverride={{ height: "30px", width: "30px" }}/></div>
    }

    return (
        <div  className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data?.map((product) => (
                <Item key={product.id} id={product.id} imageSrc={product.imageSrc} imageAlt={product.imageAlt} href={product.href} name={product.name} color={product.color} price={product.price} />
            ))}
        </div>




    )
}
