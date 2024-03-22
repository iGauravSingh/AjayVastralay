import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";


// remember to worrk with mobile first design
const Navbar = () => {
  return (
    <nav className=" w-screen h-[7rem] flex justify-between items-center border-b-4 shadow-lg px-6">

      <div className=" flex justify-center items-center gap-16 md:pl-14">
        {/* logo  */}
      <div>
        <h1 className=" text-xl font-poppins">Ajay</h1>
      </div>

      {/* menu item  */}
      <div className=" w-full hidden md:block">
        <ul className=" w-full flex gap-10">
          <div className=" flex gap-1 justify-center items-center">
            <li>Home</li>
          </div>
          <div className=" flex gap-1 justify-center items-center">
            <li>Shop</li>
            <IoIosArrowDown size={12} />
          </div>
          <div className=" flex gap-1 justify-center items-center">
            <li>About</li>
          </div>
          <div className=" flex gap-1 justify-center items-center">
            <li>Contact</li>
          </div>
        </ul>
      </div>
      </div>
        
      

      {/* icons  */}
      <div className=" flex gap-6">
        <CiHeart size={25} />
        <div className=" relative">
        <BsCart2 size={25} />
        <div className=" absolute -top-3 -right-2 h-4 w-4 bg-cyan-400 rounded-full flex justify-center items-center">
          <p className=" text-white">1</p>
        </div>
        </div>
        <div className=" hidden md:block"><GiHamburgerMenu size={25} /></div>
      </div>
    </nav>
  )
}

export default Navbar