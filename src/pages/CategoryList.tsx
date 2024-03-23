import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { categoryData } from '../utils/data/data'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  return (
    <div>
      <Navbar />
        <div className=' min-h-screen flex justify-center mt-8  '>
        <div className=" flex flex-nowrap gap-6 ">
          {categoryData.map((category) => (
            <div
              key={category.id}
              className=" flex-none snap-center touch-pan-x cursor-pointer  "
            >
              <Link to={`/category/${category.categoryIdentity}`} >
              <div className=" flex flex-col  justify-center items-center gap-4  ">
                <img
                  className=" h-[12rem] w-[12rem] rounded-full hover:rotate-6 hover:scale-105 transition duration-150 ease-in-out"
                  src={category.categoryImage}
                  alt=""
                />
                <p>{category.categoryName}</p>
              </div>
              </Link>
            </div>
          ))}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default CategoryList