import { useNavigate } from "react-router-dom"
import { formatter } from "../../usesCase/formatter"
import { useEffect } from 'react';
import { useState } from 'react';
import { useSpring, animated} from 'react-spring';



export function Item({id,  imageSrc ,imageAlt ,href ,name ,subtitulo ,price}) {

    const navigate = useNavigate();


    const [show, setShow] = useState(false);

    useEffect(() => {
            setShow(true)
    }, [id])

    const fadeAnimation = useSpring({
        opacity: show ? 1 : 0,
        config: {
            duration: 500,
        }
    })

    return (
        
        <animated.div style={fadeAnimation} className="mt-3 group relative z-0" onClick={()=> navigate(`/item/${id}`)}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {
                    imageSrc ? (
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full" 
                        />
                    ) :
                    null
                }
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <button href={href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </button>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{subtitulo}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{price ? formatter.format(price): null}</p>
            </div>
        </animated.div>
    )
}