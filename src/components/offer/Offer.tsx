import  { useState } from 'react'
import BestSale from './BestSale'
import Featured from './Featured'

const Offer = () => {

  // best , featured
  const [selectTab, setSelectTab] = useState('best')

  const handleBest = () => {
    setSelectTab('best')
  }

  const handleFeatured = () => {
    setSelectTab('featured')
  }

  return (
    <div className=' mt-5 font-poppins'>
      <div className=' flex justify-center items-center gap-6 mb-11'>
        <h3 className={`${selectTab === 'best' ? ' border-b-4 border-cyan-200 text-cyan-400' : ''} text-xl md:text-4xl cursor-pointer`} onClick={handleBest}>Best Sold</h3>
        <h3 className={`${selectTab === 'featured' ? 'border-b-4 border-cyan-200 text-cyan-400' : ''} text-xl md:text-4xl cursor-pointer`} >Featured</h3>
      </div>
        {/* {selectTab === 'best' ? <BestSale /> : <Featured />} */}
        <BestSale />
    </div>
  )
}

export default Offer