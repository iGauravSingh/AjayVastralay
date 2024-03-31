
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductDescription from '../components/ProductDescription'

import { productData } from '../utils/data/data'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useProduct from '../hooks/useProduct'

// id, productName, productImage, price,

const ProductDetail = () => {

  
  const { id } = useParams(); // Getting category ID from URL
  //console.log('useparams value',categoryIdentity)
  const { singleProduct } = useProduct(); // Using your custom hook
  
  const [proDet, setProdet] = useState([]); // State to store the category products
  

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      // Ensure we have a valid category ID before fetching
      //console.log('in use effect')
      const productId = parseInt(id, 10);
      //console.log('in use effect categoryId',categoryId)
      if (!isNaN(productId)) {
        //console.log('in use effect if')
        const Products = await singleProduct(productId);
        //console.log('in use effect if categoryProducts',categoryProducts)
        setProdet(Products);
      }
    };

    fetchCategoryProducts();
  }, [id, singleProduct]); // Dependency array ensures this runs when `id` or `categoryProduct` changes



  // const prod = productData.find(pro => pro.id === newId)

  return (
    <>
    <Navbar />
    { proDet && <ProductDescription id={proDet?.id} productName={proDet?.productName} productImage={proDet.productImage} price={proDet.price} discount={proDet.discount} stars={proDet.stars} productDescription={proDet.description}  />}
    <Footer />
    </>
  )
}

export default ProductDetail


