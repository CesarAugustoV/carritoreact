import { Carousel } from '../componentes/carousel/carousel'
import { Whatsapp } from '../componentes/WhatsApp/WhatsApp'
import { Category } from './Category'


export function Home() {


    return (
        <div className="bg-white">
            <Carousel />
            <Whatsapp />
            <Category />
        </div>
    )
}