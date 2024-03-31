
import StarGiver from "../StarGiver";
import { Link } from "react-router-dom";

interface CardSaleProps {
  id: number;
  image: string;
  name: string;
  stars: number;
  price: number;
  discount: number;
}

const CardSale = ({ id,image, name, stars, price, discount }: CardSaleProps) => {
  return (
    <div className=" flex w-[15rem] gap-2">
      <div>
        <img className=" w-[80px]" src={image} alt="product" />
      </div>
      <div className=" flex flex-col gap-2">
        <Link to={`/`} ><p>{name}</p></Link>
        <StarGiver rating={stars} />
        <p className=" text-cyan-500">
          ${Math.round(price * (1 - discount / 100) * 100) / 100} <span className=" line-through text-red-400">${price}</span> 
        </p>
      </div>
    </div>
  );
};

export default CardSale;
