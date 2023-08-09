import { Carousel } from '../componentes/carousel/carousel'
import { useQuery } from '../hooks/useQuery'
import { filtrosPromise} from '../lib/products.request'
import { Whatsapp } from '../componentes/WhatsApp/WhatsApp'
import { Category } from './Category'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Home() {

    const { data, loading } = useQuery(filtrosPromise);

    if (!data) return;


    return (
        <div className="bg-white">
            <Carousel />
            <Whatsapp />
            <Category />
        </div>
    )
}