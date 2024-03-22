import React, { useEffect, useRef, useState } from "react";

import { bestSaleData } from "../../utils/data/data";
import Card from "./Card";
// const temData = bestSaleData[0]
// console.log(temData)

const BestSale = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault(); // Prevent text selection
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    ref.current.scrollLeft = scrollLeft - walk;
  };

  React.useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [onMouseMove]);

  return (
    <div className=" w-screen flex justify-center items-center">
      <div className=" w-[85%] flex justify-center items-center">
        <div
          ref={ref}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          className="flex overflow-auto cursor-grab select-none no-scrollbar"
          style={{ userSelect: "none" }}
        >
          {/* Add your content here */}
          <div className=" flex flex-nowrap gap-6 ">
            {bestSaleData.map((bestSale) => (
              <div className=" flex-none snap-center touch-pan-x">
                <Card
                  productName={bestSale.productName}
                  productImage={bestSale.productImage}
                  price={bestSale.price}
                  discount={bestSale.discount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSale;

{
  /* <div className=' w-[85%] flex justify-center items-center'>
        <div className=' flex' >
        {bestSaleData.map((bestSale) => (
            <div className=''>
            <Card productName={bestSale.productName} productImage={bestSale.productImage} price={bestSale.price} discount={bestSale.discount}  />
        </div>
        ))}
    </div>
    </div> */
}
