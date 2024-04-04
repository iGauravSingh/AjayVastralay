import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { categoryData } from "../utils/data/data";
import { Link } from "react-router-dom";
import useCategoryList from "../hooks/useCategory";

const CategoryList = () => {
  const { data, loading, error } = useCategoryList();

  return (
    <div>
      <Navbar />
      <div className=" min-h-screen flex justify-center mt-8  ">
        <div className=" flex gap-8 ">
          {/* from server  */}
          <div>
            {data?.map((category) => (
              <div
                key={category.id}
                className="  cursor-pointer  "
              >
                <p>{category.id}</p>
                <Link to={`/category/${category.id}`}>
                  <div className=" flex flex-col  justify-center items-center gap-4 mb-10 ">
                    <img
                      className=" h-[12rem] w-[12rem] rounded-full hover:rotate-6 hover:scale-105 transition duration-150 ease-in-out"
                      src={category.categoryImage}
                      alt=""
                    />
                    <p>{category.categoryName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* static Category  */}
          <div>
            {categoryData.map((category) => (
              <div
                key={category.id}
                className="   "
              >
                <Link to={`/category/${category.categoryIdentity}`}>
                  <div className=" flex flex-col  justify-center items-center gap-4  mb-10 ">
                    <img
                      className=" h-[12rem] w-[12rem] rounded-full hover:rotate-6 hover:scale-105 transition duration-150 ease-in-out"
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
      <Footer />
    </div>
  );
};

export default CategoryList;
