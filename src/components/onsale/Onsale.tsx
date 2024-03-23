import CardSale from "./CardSale";

import { saleData } from "../../utils/data/data";
import { useState } from "react";

const Onsale = () => {
  // for mobile screen
  const [salepart, setSalePart] = useState("first");

  const [mobileSale, setMObileSale] = useState(saleData?.slice(0, 3));

  const handleFirst = () => {
    setSalePart("first");
    setMObileSale(saleData?.slice(0, 3));
  };

  const handleSecond = () => {
    setSalePart("second");
    setMObileSale(saleData?.slice(3, 6));
  };

  const handleThird = () => {
    setSalePart("third");
    setMObileSale(saleData?.slice(6, 9));
  };

  return (
    <div className=" w-screen flex justify-center items-center mt-8 mb-12 font-poppins">
      <div className=" w-[85%] flex flex-col justify-center items-center">
        <h3 className=" text-3xl ">On-Sale Product</h3>
        <p className=" text-sm mb-10">Check out on-sale Producs</p>
        <div className=" w-full hidden md:block">
          <div className=" w-full flex justify-between items-center">
            <div className=" flex flex-col gap-3">
              {saleData?.slice(0, 3).map((sale) => (
                <CardSale
                  id={sale.id}
                  image={sale.productImage}
                  name={sale.productName}
                  stars={sale.stars}
                  price={sale.price}
                  discount={sale.discount}
                />
              ))}
            </div>
            <div className=" flex flex-col gap-3">
              {saleData?.slice(3, 6).map((sale) => (
                <CardSale
                  id={sale.id}
                  image={sale.productImage}
                  name={sale.productName}
                  stars={sale.stars}
                  price={sale.price}
                  discount={sale.discount}
                />
              ))}
            </div>
            <div className=" flex flex-col gap-3">
              {saleData?.slice(6, 9).map((sale) => (
                <CardSale
                  id={sale.id}
                  image={sale.productImage}
                  name={sale.productName}
                  stars={sale.stars}
                  price={sale.price}
                  discount={sale.discount}
                />
              ))}
            </div>
          </div>
        </div>
        {/* mobile view  */}
        <div className=" w-screen md:hidden">
          <div className=" flex flex-col gap-3">
            {mobileSale?.map((sale) => (
              <CardSale
                id={sale.id}
                image={sale.productImage}
                name={sale.productName}
                stars={sale.stars}
                price={sale.price}
                discount={sale.discount}
              />
            ))}
          </div>
          <div className=" flex justify-center items-center gap-2 mt-6">
            <p
              onClick={handleFirst}
              className={`${
                salepart === "first" ? "bg-cyan-500" : "bg-slate-700"
              } w-4 h-4 rounded-full  cursor-pointer`}
            ></p>
            <p
              onClick={handleSecond}
              className={`${
                salepart === "second" ? "bg-cyan-500" : "bg-slate-700"
              } w-4 h-4 rounded-full  cursor-pointer`}
            ></p>
            <p
              onClick={handleThird}
              className={`${
                salepart === "third" ? "bg-cyan-500" : "bg-slate-700"
              } w-4 h-4 rounded-full  cursor-pointer`}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onsale;
