import { Link } from "react-router-dom";


interface bstSaleDataProps {
    id: number;
    productName: string;
    productImage: string;
    price: number;
    discount: number;
    
}

const Card = ({id,productName,productImage,price,discount}:bstSaleDataProps) => {
  return (
    <Link to={`/product/${id}`} >
    <div className=" flex flex-col font-poppins mb-10" >
        <div className=" relative cursor-pointer">
            <img className=" rounded-lg" src={productImage} alt={productName} />
            { discount > 0 && <p className=" absolute top-2 left-2 w-8 h-5 bg-black text-white text-center text-sm font-extralight rounded-md">-{discount}%</p>}
        </div>
        <div className=" flex flex-col gap-2 justify-center items-center">
        <p className=" text-black hover:text-cyan-500 cursor-pointer">{productName}</p>
        <p className=" text-cyan-500">{!discount ? (<p>${price}</p>) : (<p>
          ${Math.round(price * (1 - discount / 100) * 100) / 100} <span className=" line-through text-red-400">${price}</span> 
        </p>)}</p>
        </div>
        
    </div>
    </Link>
  )
}

export default Card