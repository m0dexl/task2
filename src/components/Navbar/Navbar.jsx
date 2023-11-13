import React from "react";
import { Data } from "../data/data";
import SearchIcon from "../assets/Group 3.jpg";
import BasketItem from "../assets/Group 2.jpg";

const Navbar = () => {
  return (
    // <div>
    //   <img src={`${Data[0].photo}`} style={{ height: 100, width: 100 }} />
    // </div>
    <div>
      <nav className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 px-20">
          <div className="text-2xl cursor-pointer flex items-center gap-1">
            <h2 className="font-montserrat">MY JEWELRY STORE</h2>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img src={SearchIcon} className="mx-8" />
            <img src={BasketItem} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
