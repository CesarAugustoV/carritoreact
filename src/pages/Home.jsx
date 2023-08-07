import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { ItemListContainer } from '../componentes'
import { Carousel } from '../componentes/carousel/carousel'
import { useQuery } from '../hooks/useQuery'
import { filtrosPromise } from '../lib/products.request'
import { Whatsapp } from '../componentes/WhatsApp/WhatsApp'
import { Footer } from '../componentes/Footer/Footer'
import { Category } from './Category'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Home() {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const { data, loading } = useQuery(filtrosPromise);

    if (!data) return

    return (
        <div className="bg-white">
            <Carousel />
            <Whatsapp />
            <Category />
        </div>
    )
}