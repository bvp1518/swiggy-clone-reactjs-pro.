import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";



export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }

  const links = [
    {
      icon: <IoMdSearch />,
      name: "Search"
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Ofers",
      sup:"New"
    },
     {
      icon: "",
      name: "Help"
    },
    {
      icon: "",
      name: "Sign In"
    }, {
      icon: "",
      name: "Cart"
    },
  ]


  return (
    <>
      <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden"
        }}>

        <div onClick={(e) => {
          e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
          style={{
            left: toggle ? '0%' : '-100%'
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
          <div className='w-[80px]'>
            <img src="images/sLogo.png" className='w-full' alt="swiggy Logo" />
          </div>
          <div className=''>
            <span className='font-bold underline'> Other </span> <RxCaretDown fontSize={25}  className='inline  text-[#fc8019] 
            cursor-pointer' onClick={showSideMenu} />
          </div>


          <nav className='hidden md:flex cursor-pointer list-none gap-10 ml-auto font-bold'>
            {
              links.map(
                (link, index) => {
                 return <li key={index} className='flex  hover:text-[#fc8019] inline items-center gap-2'>
                    {link.icon}
                    {link.name}
                    <sup>{link.sup}</sup>
                  </li>
                }
              )
            }
          </nav>
        </div>
      </header>
    </>
  );
}
