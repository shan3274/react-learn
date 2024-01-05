import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <div className="relative">
      <div className="w-full h-[5rem] flex flex-row items-center justify-around fixed top-0">
        <div className="w-[80%] h-full flex flex-row items-center justify-around">
          <div className="sm:w-[30%] w-[50%] h-full flex flex-row items-center justify-start text-[30px]">
            LOGO
          </div>
          <div className="w-[70%] h-full hidden sm:flex flex-row items-center justify-around">
            <Link href="#" className="hover:text-gray-500 duration-300">
              About
            </Link>
            <Link href="#" className="hover:text-gray-500 duration-300">
              Custom Web
            </Link>
            <Link href="#" className="hover:text-gray-500 duration-300">
              Product
            </Link>
            <Link href="#" className="hover:text-gray-500 duration-300">
              Contact
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search here...."
                className="w-[200px] h-[30px] rounded-full border-[.5px] border-black p-5 text-[15px]"
              />
              <CiSearch size={20} className="absolute top-3 right-5" />
            </div>
          </div>
          <div className="sm:hidden w-[50%] h-full flex items-center justify-end">
            {!openMenu ? (
              <AiOutlineMenu size={25} onClick={() => setOpenMenu(true)} />
            ) : (
              <IoMdClose size={25} onClick={() => setOpenMenu(false)} />
            )}
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="sm:hidden w-full h-screen flex flex-col items-center gap-5 pt-[10rem]">
          <Link href="#" className="hover:text-gray-500 duration-300">
            About
          </Link>
          <Link href="#" className="hover:text-gray-500 duration-300">
            Custom Web
          </Link>
          <Link href="#" className="hover:text-gray-500 duration-300">
            Product
          </Link>
          <Link href="#" className="hover:text-gray-500 duration-300">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
