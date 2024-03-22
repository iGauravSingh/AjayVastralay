import React from 'react'

import bottomBanner from '../utils/images/bottomBanner.png'

const BottomBanner = () => {
  return (
    <div className=' w-screen flex justify-center mt-8 mb-12'>
        <div className=' w-[85%]'>
        <img src={bottomBanner} alt="" />
        </div>
    </div>
  )
}

export default BottomBanner