import { useContext } from 'react'

import { ShopContext } from './contexts/ShopContexts'
import { Link } from 'react-router-dom';






export default function Cartdata() {
    const { shop,setShop } = useContext(ShopContext)

    // Calculate total amount
    const totalAmount = shop.reduce((acc, item) => acc + (item.price * item.quantity * 100) /100, 0);

     

    // const handleCheckout = () => {
    //     // Implement checkout logic here
    //     console.log("Checkout clicked");
    // };

    const totalCalulator = (price : number, quantity: number) => {
       return  Math.round(price * quantity * 100)/100
    }

    const handleDelete = (id:any) => {
        setShop(shop.filter((item)=> item.id !== id ))
    }

    return (
        <div className='text-2xl px-4 md:px-[20rem] font-poppins mb-20 min-h-screen'>
            <div>
                <h2 className='font-bold text-2xl md:text-3xl text-center mb-12 mt-8 pb-4 border-b-2'>YOUR ITEMS</h2>
                <div>
                    {shop.length === 0 ? (
                        <h2 className='font-bold text-2xl text-green-700'>Nothing Here Yet continue Shoping</h2>
                    ) : (
                        <div>
                            {shop.map(item => (
                                <div className='flex gap-4 mb-4 items-center justify-between' key={item.id}>
                                    <p>{item.productName}</p>
                                    <p>{item.quantity}</p>
                                    <p className='font-medium'>₹ {Math.round(item.price * 100) /100}</p>
                                    <p className='font-medium'>₹ {totalCalulator(item.price, item.quantity)}</p>
                                    <p onClick={()=>handleDelete(item.id)} className=' text-red-500 border-2 border-red-600 px-2 py-1 cursor-pointer'>Remove</p>
                                    
                                </div>
                            ))}

                            <div className='flex justify-between items-center mt-8 font-bold text-2xl md:text-3xl border-t-2 pt-8'>
                                <p>TOTAL AMOUNT</p>
                                <p>₹ {totalAmount}</p>
                            </div>
                            <div className='text-center mt-8'>
                                <Link to='/checkout'><button className='bg-slate-950 text-white w-[30%] px-2 md:px-4  py-1 md:py-2 text-sm md:text-base'>Buy Now</button></Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}