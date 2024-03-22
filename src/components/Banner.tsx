import banner1 from '../utils/images/banner-1.jpg'
import banner2 from '../utils/images/banner-2.jpg'
import banner3 from '../utils/images/banner-4.jpg'

const Banner = () => {
  return (
   <div className=' w-screen flex justify-center items-center mt-6 mb-12'>
     <div className=' w-[85%] grid grid-cols-12 place-items-center gap-5'>
        <img className=' col-span-12 md:col-span-3' src={banner1} alt="banner" />
        <img className=' col-span-12 md:col-span-6' src={banner2} alt="banner" />
        <img className=' col-span-12 md:col-span-3' src={banner3} alt="banner" />
    </div>
   </div>
  )
}

export default Banner