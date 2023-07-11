import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CartWidget } from '../CartWidget/CartWidget'

const navigation = {
    categories: [
        {
            id: 'mujer',
            name: 'Mujer',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Dresses', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Denim', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accesorios',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'hombre',
            name: 'Hombre',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Ofertas', href: '#' },
        { name: 'Accesorios', href: '#' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function NavBar({ mostrarCarrito, cantidadCarrito}) {
    const [open, setOpen] = useState(true)
    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                                <div className="grid grid-cols-2 gap-x-4">
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className="group relative text-sm">
                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                            </div>
                                                            <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                {item.name}
                                                            </a>
                                                            <p aria-hidden="true" className="mt-1">
                                                                Shop now
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6"
                                                        >
                                                            {section.items.map((item) => (
                                                                <li key={item.name} className="flow-root">
                                                                    <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                        {item.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root">
                                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                            Ingresar
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                            Registrar
                                        </a>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <a href="#" className="-m-2 flex items-center p-2">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-chile.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900">CLP</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white z-10">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="data:image/png;base64,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"
                                        alt=""
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.map((item) => (
                                                                                <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-cover object-center"
                                                                                        />
                                                                                    </div>
                                                                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true" className="mt-1">
                                                                                        Shop now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name} className="flex">
                                                                                                <a href={item.href} className="hover:text-gray-800">
                                                                                                    {item.name}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Ingresar
                                    </a>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Crear cuenta
                                    </a>
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1599px-Flag_of_Chile.svg.png"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">CLP</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </div>
                                
                                {/* Cart */}
                                <CartWidget mostrarCarrito={mostrarCarrito} cantidadCarrito={cantidadCarrito}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
