import React, { useState } from 'react'

import { heroData } from '../utils/data/data'
import Button from './Button'

const Hero = () => {

    const [heroDataState, setHeroDataState] = useState(0)

    const handleFirst = () => {
        setHeroDataState(0)
    }

    const handleSecond = () => {
        setHeroDataState(1)
    }

  return (
    <div className=' relative w-screen'>
        {/* image  */}
        <div className='w-full'>
            <img className=' w-full h-[300px] md:h-[500px] object-cover ' src={heroData[heroDataState].image} alt="" />
        </div>

        {/* image data  */}
        <div className=' absolute top-[50%] left-0 -translate-y-1/2 flex flex-col font-poppins gap-6 pl-4 md:pl-32 '>
            <div className=' flex flex-col gap-1 md:gap-2'>
            <h2 className='text-3xl md:text-6xl'>{heroData[heroDataState].title1}</h2>
            <h2 className='text-3xl'>{heroData[heroDataState].title2}</h2>
            <p className=' text-sm'>{heroData[heroDataState].description}</p>
            </div>
            <Button text='Shop Now' />
        </div>

        {/* image changer bottom  */}
        <div className=' absolute bottom-1 left-[50%] -translate-x-1/2 flex gap-2'>
            <div onClick={handleFirst} className={` w-3 h-3 rounded-full ${heroDataState === 0 ? 'bg-cyan-500' : 'bg-slate-500'} border shadow-sm cursor-pointer`}></div>
            <div onClick={handleSecond} className={` w-3 h-3 rounded-full ${heroDataState === 1 ? 'bg-cyan-500' : 'bg-slate-500'} border shadow-sm cursor-pointer`}></div>
        </div>

    </div>
  )
}

export default Hero