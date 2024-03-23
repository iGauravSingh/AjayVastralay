import React from 'react'

import { productData } from '../utils/data/data'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/offer/Card'

const CategoryProduct = () => {

  const { categoryIdentity } = useParams()

  const categoryData = productData?.filter((product) => product.category === categoryIdentity)

  
// productName, productImage, price, discountt
  return (
    <>
    <Navbar />
    <h3 className=' text-center font-poppins text-4xl mt-5'>{categoryIdentity}</h3>
    <div className=' flex justify-center items-center gap-7 mt-8'>
    <div className=' grid grid-cols-2 gap-10'>
      {categoryData.map((cat) => <Card id={cat.id} productName={cat.productName} productImage={cat.productImage} price={cat.price} discount={cat.discount} />)}
    </div>
    </div>
    <Footer />
    </>
  )
}

export default CategoryProduct