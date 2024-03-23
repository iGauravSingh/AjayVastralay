import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cartdata from '../components/Cartdata'

const Cart = () => {
  return (
    <>
    <Navbar />
    <div>
      <Cartdata />
    </div>
    <Footer />
    </>
  )
}

export default Cart