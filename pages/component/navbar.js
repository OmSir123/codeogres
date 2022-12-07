import React, { useState } from "react";
import { SiProgress } from "react-icons/si";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { useRef } from "react";

const Navbar = () => {
  const [nav, setnav] = useState("hidden");
  const [menu, setmenu] = useState("block");
  const [cross, setcross] = useState("hidden");
  const ref = useRef();

  const menu1 = () => {
    setnav("block");
    setmenu("hidden");
    setcross("block");
  };
  const cross1 = () => {
    setnav("hidden");
    setmenu("block");
    setcross("hidden");
  };
  const hideNavAfterCLick = () => {
    setnav("hidden");
    setmenu("block");
    setcross("hidden");
  };
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className='md:flex   text-center sticky top-0 z-10  md:justify-between bg-slate-800 py-2 '>
      <div className='logo  flex text-center justify-center '>
        <h1 className='logo ml-10  font-sans md:ml-10 font-extrabold text-xl md:text-2xl pr-3 text-blue-500'>
          CODE OPPO
        </h1>
        <SiProgress className='text-blue-500 mt-2' />
      </div>
      <div className='nav'>
        <ul
          ref={ref}
          onClick={hideNavAfterCLick}
          className={`${nav} md:flex space-x-10 space-y-5 md:space-y-0 text-white `}
        >
          <li></li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/tsirt"}>Tsirt</Link>
          </li>
          <li>
            <Link href={"/bag"}>Bags</Link>
          </li>
          <li>
            <Link href={"/mugs"}>Mugs</Link>
          </li>
          <li>
            <Link href={"/hoodie"}>Hoodie</Link>
          </li>
          <li>
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='cart'>
        <button onClick={togglecart}>
          <FaShoppingCart className='text-white text-xl absolute md:right-4 right-16 top-3' />
        </button>
        <button onClick={menu1} className={` md:hidden ${menu}`}>
          <GiHamburgerMenu className='text-white text-2xl absolute right-5 top-3' />
        </button>
        <Link href={"/login"}>
          <FaUserAlt className='text-white absolute right-24 md:right-16  top-3 cursor-pointer text-xl' />
        </Link>
        <button onClick={cross1} className={`md:hidden ${cross}`}>
          <ImCross className='text-white text-xl absolute right-5 top-3' />
        </button>
        <div
          ref={ref}
          className='sidebar w-[20%] absolute top-10 right-0 bg-blue-100 p-10 rounded-lg transform  translate-x-full transition-transform'
        >
          <h1 className='font-bold text-xl'>Shopping Cart</h1>
          <span onClick={togglecart} className='cursor-pointer'>
            <ImCross className='text-red-500 hover:text-red-400 active:text-red-600 text-lg absolute right-5 top-3' />
          </span>
          <ol className='list-decimal'>
            <li>
              <span className='w-2/3'></span>
            </li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
