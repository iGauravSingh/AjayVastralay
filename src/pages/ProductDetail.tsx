import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductDescription from '../components/ProductDescription'

import { productData } from '../utils/data/data'
import { useParams } from 'react-router-dom'

// id, productName, productImage, price,

const ProductDetail = () => {

  const { id } = useParams()
  var newId: number
  if(id) {
    newId = parseInt(id)
  }

  const prod = productData.find(pro => pro.id === newId)

  return (
    <>
    <Navbar />
    { prod && <ProductDescription id={prod?.id} productName={prod?.productName} productImage={prod.productImage} price={prod.price} discount={prod.discount} stars={prod.stars} productDescription={prod.discription}  />}
    <Footer />
    </>
  )
}

export default ProductDetail


