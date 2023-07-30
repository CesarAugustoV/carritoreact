const PRODUCTOS = [{
        id: 1,
        name: 'Camiseta basica',
        category: {
            sex: 'men'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 10,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Negro',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 2,
        name: 'Camiseta estilo',
        category: {
            sex: 'men'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 15,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Blanca',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 3,
        name: 'Camiseta gris',
        category: {
            sex: 'men'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 15,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Gris',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 4,
        name: 'Camiseta figura',
        category: {
            sex: 'women'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 18,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Multicolor',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 5,
        name: 'Bolso de mano',
        category: {
            sex: 'women'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 30,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Azul',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 6,
        name: 'Cartera',
        category: {
            sex: 'women'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 35,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Gris',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 7,
        name: 'Bolso pequeño',
        category: {
            sex: 'women'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 28,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Salmon',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 8,
        name: 'Catera estilo',
        category: {
            sex: 'women'
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 38,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Amarillo',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
        id: 9,
        name: 'Camisetas basicas 6-pack',
        category: {
            sex: 'men',
            oferta: true,
        },
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        price: 99,
        stock: 10,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        color: 'Multicolor',
        colors: [{
                name: 'White',
                class: 'bg-white',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Gray',
                class: 'bg-gray-200',
                selectedClass: 'ring-gray-400'
            },
            {
                name: 'Black',
                class: 'bg-gray-900',
                selectedClass: 'ring-gray-900'
            }
        ],
        sizes: [{
                name: 'XXS',
                inStock: true
            },
            {
                name: 'XS',
                inStock: true
            },
            {
                name: 'S',
                inStock: true
            },
            {
                name: 'M',
                inStock: true
            },
            {
                name: 'L',
                inStock: true
            },
            {
                name: 'XL',
                inStock: true
            },
            {
                name: 'XXL',
                inStock: true
            },
            {
                name: 'XXXL',
                inStock: false
            },
        ],
        description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    }
    // More products...
]


export const productsPromise = (id) => {
    const _products = id ? PRODUCTOS.filter((product) => product.category.sex.toLowerCase() === id) : PRODUCTOS;

    return new Promise((res) => {
        setTimeout(() => {
            res(_products)
        }, 1000);
    })
};

export const productsPromiseId = (id) => {
    const producto = PRODUCTOS.filter((product) => product.id === id)[0];

    return new Promise((res) => {
        setTimeout(() => {
            res(producto)
        }, 1000);
    })
};