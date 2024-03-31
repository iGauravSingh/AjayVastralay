
import React, { useEffect, useRef, useState } from "react";
import { categoryData } from "../utils/data/data"
import { Link } from "react-router-dom";




const Category = ({catData}) => {
 
 

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

  useEffect(() => {
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
    <div className=" w-screen flex justify-center items-center mt-16 mb-16 font-poppins">
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
            
          {catData?.map((category) => (
            <div
              key={category.id}
              className=" flex-none snap-center touch-pan-x cursor-pointer  "
            >
              <Link to={`/category/${category.categoryIdentity}`} >
              <div className=" flex flex-col  justify-center items-center gap-4  ">
                <img
                  className=" h-[5rem] md:h-[12rem] w-[5rem] md:w-[12rem] rounded-full hover:rotate-6 hover:scale-105 transition duration-150 ease-in-out"
                  src={category.categoryImage}
                  alt=""
                />
                <p>{category.categoryName}</p>
              </div>
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
          }
export default Category