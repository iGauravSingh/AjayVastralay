

import bottomBanner from '../utils/images/bottomBanner.png'

const BottomBanner = () => {
  return (
    <div className=' w-screen flex justify-center mt-8 mb-12'>
        <div className=' w-[85%]'>
        <img className=' hover:scale-105 transition duration-150 ease-in-out' src={bottomBanner} alt="" />
        </div>
    </div>
  )
}

export default BottomBanner