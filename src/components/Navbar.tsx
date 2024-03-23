import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useShopContext } from "./contexts/ShopContexts";
import { IoIosSearch } from "react-icons/io";

// category data
 import { categoryData } from "../utils/data/data";
import { useState } from "react";

// remember to worrk with mobile first design
const Navbar = () => {

  const [text,setText] = useState('')

  const handleChange = (e: any) => {
    setText(e.target.value)
  }

  const { shop } = useShopContext();

  

  return (
    <nav className=" w-screen h-[7rem] z-10 flex justify-between items-center border-b-4 shadow-lg px-6">
      <div className=" flex justify-center items-center gap-16 md:pl-14">
        {/* logo  */}
        <div>
          <Link to="/">
            <h1 className=" flex justify-center items-center">
              <span className=" font-poppins text-2xl text-cyan-500">Ajay</span>{" "}
              <span className=" font-caveat text-4xl text-pink-600">Vastralay</span>
            </h1>
          </Link>
        </div>

        {/* menu item  */}
        <div className=" w-full hidden md:block">
          <ul className=" w-full flex gap-10">
            <div className=" flex gap-1 justify-center items-center">
              <Link to="/">
                <li>Home</li>
              </Link>
            </div>
            <div className=" flex gap-1 justify-center items-center">
              <Link to="/category">
                <li>Shop</li>
              </Link>
              <IoIosArrowDown size={12} />
            </div>
            <div className=" flex gap-1 justify-center items-center">
              <Link to="/about">
                <li>About</li>
              </Link>
            </div>
            <div className=" flex gap-1 justify-center items-center">
              <Link to="/contactus">
                <li>Contact Us</li>
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {/* search  */}
      <div className=" hidden md:block">
      <div className=" relative border-2 border-cyan-500 flex justify-center items-center rounded-2xl px-1 py-1 gap-1">
        <IoIosSearch size={18} />
        <input value={text} onChange={handleChange} className=" outline-none" type="text" />
        { text.length > 0 ? (
          <div className=" absolute top-8 w-full pl-2 pt-2 pb-1  border-2 border-cyan-500 bg-white rounded-lg z-40 flex flex-col">
            {categoryData.map((cat) => (
              <Link to={`/category/${cat.categoryIdentity}`}><p>{cat.categoryName.toLocaleLowerCase().includes(text) ? cat.categoryName : ''}</p></Link>
            ))}
          </div>
        ) : ('')}
      </div>
      </div>

      {/* icons  */}
      <div className=" flex gap-6 mr-2 md:mr-5">
        <CiHeart size={25} />
        <div className=" relative">
          <Link to="/cart">
            <BsCart2 size={25} />
          </Link>

          <div className=" absolute -top-3 -right-2 h-4 w-4 bg-cyan-400 rounded-full flex justify-center items-center">
            <p className=" text-white">{shop.length}</p>
          </div>
        </div>
        <div className=" md:hidden">
          <GiHamburgerMenu size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
