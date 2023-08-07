
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useEffect } from 'react'
import { productsPromiseId } from '../lib/products.request'
import { NavLink, useParams } from 'react-router-dom'
import { formatter } from '../usesCase/formatter'
import { useQuery } from '../hooks/useQuery'
import { ScaleLoader } from 'react-spinners'
import { useSpring, animated } from 'react-spring';
import { Counter } from '../componentes/Counter/Counter'
import { Footer } from '../componentes/Footer/Footer'




function classNames(...classes) {

    return classes.filter(Boolean).join(' ')
}



export function Details() {

    const { id } = useParams();

    const [show, setShow] = useState(false);

    const { data, loading } = useQuery(productsPromiseId, +id);


    useEffect(() => {
        if (data) {
            setShow(true)
        }
    }, [loading])

    const fadeAnimation = useSpring({
        opacity: show ? 1 : 0,
        config: {
            duration: 500,
        }
    });

    if (!data) {
        return <div style={{ position: 'fixed', top: "0", left: "0", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}><ScaleLoader color="#36d7b7" size={100} cssOverride={{ height: "30px", width: "30px" }} /></div>
    }

    console.log(data.category);

    return (
        <animated.div style={fadeAnimation} className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {data.category.map((breadcrumb) => (
                            <li key={breadcrumb.identificador}>
                                <div className="flex items-center">
                                    <NavLink href={breadcrumb.href} to={breadcrumb.rute.toLowerCase()} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </NavLink>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={data.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {data.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-xl sm:px-6 lg:grid lg:max-w-xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={data.imageSrc}
                            alt={data.imageAlt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{formatter.format(data.price)}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                data.reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{data.reviews.average} out of 5 stars</p>
                                <a href={data.reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {data.reviews.totalCount} reviews
                                </a>
                            </div>
                            <div className="mt-5 space-y-6">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>
                                <p className="mt-5 text-sm text-gray-600">{data.details}</p>
                            </div>
                        </div>

                        <Counter data={data} />



                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{data.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {data.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </animated.div>
    )
}
