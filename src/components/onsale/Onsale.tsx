
import CardSale from './CardSale'

import { saleData } from '../../utils/data/data'

const Onsale = () => {
  return (
    <div className=' w-screen flex justify-center items-center mt-8 mb-12 font-poppins'>
      <div className=' w-[85%] flex flex-col justify-center items-center'>
        <h3 className=' text-3xl '>On-Sale Product</h3>
        <p className=' text-sm mb-10'>Check out on-sale Producs</p>
        <div className=' w-full flex justify-between items-center'>
            <div className=' flex flex-col gap-3'>
            {saleData?.slice(0,3).map((sale) => (
                <CardSale image={sale.productImage} name={sale.productName} stars={sale.stars} price={sale.price} discount={sale.discount} />
            ))}
            </div>
            <div className=' flex flex-col gap-3'>
            {saleData?.slice(3,6).map((sale) => (
                <CardSale image={sale.productImage} name={sale.productName} stars={sale.stars} price={sale.price} discount={sale.discount} />
            ))}
            </div>
            <div className=' flex flex-col gap-3'>
            {saleData?.slice(6,9).map((sale) => (
                <CardSale image={sale.productImage} name={sale.productName} stars={sale.stars} price={sale.price} discount={sale.discount} />
            ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Onsale