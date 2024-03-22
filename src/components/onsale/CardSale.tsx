import React from "react";
import StarGiver from "../StarGiver";

interface CardSaleProps {
  image: string;
  name: string;
  stars: number;
  price: number;
  discount: number;
}

const CardSale = ({ image, name, stars, price, discount }: CardSaleProps) => {
  return (
    <div className=" flex w-[15rem] gap-2">
      <div>
        <img className=" w-[80px]" src={image} alt="product" />
      </div>
      <div className=" flex flex-col gap-2">
        <p>{name}</p>
        <StarGiver rating={stars} />
        <p className=" text-cyan-500">
          ${Math.round(price * (1 - discount / 100) * 100) / 100} <span className=" line-through text-red-400">${price}</span> 
        </p>
      </div>
    </div>
  );
};

export default CardSale;
