import slider1 from '../images/slider3-1.png'
import slider2 from '../images/slider3-2.png'

// category 

import cat1 from '../images/lg-thumb-1.png'
import cat2 from '../images/lg-thumb-2.png'
import cat3 from '../images/lg-thumb-3.png'
import cat4 from '../images/lg-thumb-4.png'
import cat5 from '../images/lg-thumb-5.png'

// best sale product
import bsProduct1 from '../images/2.jpg'
import bsProduct2 from '../images/3.jpg'
import bsProduct3 from '../images/4.jpg'



export const heroData = [
    {id: 1, title1: 'Lorem ipsum',title2: 'dolor sit amet.',description: '', image: slider1},
    {id: 2, title1: 'Lorem ipsum',title2: '',description: 'Lorem ipsum dolor sit adipisicing elit. Ipsum', image: slider2}
]


export const categoryData = [
    {id: 1, categoryName: 'For Baby', categoryIdentity: 'baby' ,categoryImage: cat1},
    {id: 2, categoryName: 'Age: 1-2', categoryIdentity: '1to2' , categoryImage: cat2},
    {id: 3, categoryName: 'Age: 2-4', categoryIdentity: '2to4' , categoryImage: cat3},
    {id: 4, categoryName: 'Age: 4-6', categoryIdentity: '4to6' , categoryImage: cat4},
    {id: 5, categoryName: 'Age: 6-8', categoryIdentity: '6to8' , categoryImage: cat5},
]

// add category to every product
export const productData = [
    {id: 1, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 16, stars: 4, category: 'baby',quantity: 10, sales: 20, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 2, productName: 'dino', productImage: bsProduct1, price: 120 , discount: 6, stars: 4, category: '1to2',quantity: 10, sales: 2, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 3, productName: 'dibooo', productImage: bsProduct2, price: 12 , discount: 0, stars: 4, category: '2to4',quantity: 10, sales: 24, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 4, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 60, stars: 4, category: '4to6',quantity: 10, sales: 98, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 5, productName: 'dino', productImage: bsProduct1, price: 12 , discount: 0, stars: 4, category: '6to8',quantity: 10, sales: 80, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 6, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, category: 'baby',quantity: 10, sales: 20, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 7, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 0, stars: 4, category: '1to2',quantity: 10, sales: 76, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 8, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, category: 'baby',quantity: 10, sales: 22, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 9, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 0, stars: 4, category: '4to6',quantity: 10, sales: 27, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 10, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 8, stars: 4, category: '6to8',quantity: 10, sales: 10, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 11, productName: 'dino', productImage: bsProduct2, price: 12 , discount: 0, stars: 4, category: '2to4',quantity: 10, sales: 24, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 12, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 60, stars: 4, category: '4to6',quantity: 10, sales: 98, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 13, productName: 'dino', productImage: bsProduct1, price: 12 , discount: 0, stars: 4, category: '6to8',quantity: 10, sales: 80, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 14, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, category: 'baby',quantity: 10, sales: 20, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 15, productName: 'dino', productImage: bsProduct1, price: 120 , discount: 6, stars: 4, category: '1to2',quantity: 10, sales: 2, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 16, productName: 'dino', productImage: bsProduct2, price: 12 , discount: 0, stars: 4, category: '2to4',quantity: 10, sales: 24, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 17, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 60, stars: 4, category: '4to6',quantity: 10, sales: 98, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 18, productName: 'dino', productImage: bsProduct1, price: 12 , discount: 0, stars: 4, category: '6to8',quantity: 10, sales: 80, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 19, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, category: 'baby',quantity: 10, sales: 20, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 20, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 0, stars: 4, category: '1to2',quantity: 10, sales: 76, featured: false, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 21, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, category: 'baby',quantity: 10, sales: 22, featured: true, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    
]

export const bestSaleData = [
    {id: 1, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 6, productName: 'dino', productImage: bsProduct3, price: 22 , discount: 17, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 7, productName: 'dino', productImage: bsProduct2, price: 82 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 8, productName: 'dino', productImage: bsProduct1, price: 19 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 2, productName: 'dino', productImage: bsProduct2, price: 18 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 3, productName: 'dino', productImage: bsProduct1, price: 22 , discount: 18, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 4, productName: 'dino', productImage: bsProduct2, price: 16 , discount: 8, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    {id: 5, productName: 'dino', productImage: bsProduct1, price: 52 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
    
]

// export const featuredData = [
//     {id: 1, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 2, productName: 'dino', productImage: bsProduct2, price: 18 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 3, productName: 'dino', productImage: bsProduct1, price: 22 , discount: 18, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 4, productName: 'dino', productImage: bsProduct2, price: 16 , discount: 8, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 5, productName: 'dino', productImage: bsProduct1, price: 52 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 6, productName: 'dino', productImage: bsProduct3, price: 22 , discount: 17, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 7, productName: 'dino', productImage: bsProduct2, price: 82 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 8, productName: 'dino', productImage: bsProduct1, price: 19 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
// ]

// export const saleData = [
//     {id: 1, productName: 'dino', productImage: bsProduct3, price: 12 , discount: 6, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 2, productName: 'dino', productImage: bsProduct2, price: 18 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 3, productName: 'dino', productImage: bsProduct1, price: 22 , discount: 18, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 4, productName: 'dino', productImage: bsProduct2, price: 16 , discount: 8, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 5, productName: 'dino', productImage: bsProduct1, price: 52 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 6, productName: 'dino', productImage: bsProduct3, price: 22 , discount: 17, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 7, productName: 'dino', productImage: bsProduct2, price: 82 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 8, productName: 'dino', productImage: bsProduct1, price: 19 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
//     {id: 8, productName: 'dino', productImage: bsProduct1, price: 19 , discount: 0, stars: 4, discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tempora dignissimos omnis laboriosam adipisci qui, quos a, ipsam deserunt numquam eligendi dolorum fugit, sapiente iste?'},
// ]

export const featuredData = productData.filter((product) => product.featured === true)

export const saleData = productData.filter((product) => product.discount !== 0)






