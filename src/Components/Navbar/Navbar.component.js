import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";
const Navsm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">It All Starts Here</h1>
          <span className="text-gray-400 text-xs flex items-center">
            Bhubaneshwar <BiChevronRight />
          </span>
        </div>
        <div className="w-6 h-6">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const Navmd = () => {
  return (
    <>
      <div className="w-full flex items-center px-3 py-2 mt-1 gap-2 bg-white rounded-sm">
        <div>
          <BiSearch className="w-full h-full text-grey-100 mt-1 text-md" />
        </div>
        <input
          type="search"
          className="w-full focus:outline-none"
          placeholder="Search for Movies, Events, Plays, Sports, Activities"
        />
      </div>
    </>
  );
};
const Navlg = () => {
  return (
    <>
      <div className="container mx-auto w-full px-4 py-2 flex justify-evenly">
        {/* // 1st Div */}
        <div className="w-5/12 flex items-center">
          <div w-12 h-12>
            <img src="../../../public/logo.svg" alt="logo" />
          </div>
          <div className="w-full flex items-center text-sm px-3 py-2 gap-4 bg-white rounded">
            <div>
              <BiSearch className="w-full h-full text-grey-100 text-md" />
            </div>
            <input
              type="search"
              className="w-full focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports, Activities"
            />
          </div>
        </div>

        {/* // 2nd Div */}
        <div className="flex items-center gap-5">
          <div className="text-gray-300 text-sm flex items-center hover:text-white cursor-pointer">
            Bhubaneshwar <BiChevronDown />
          </div>
          <button className="bg-btColor-400 text-gray-50 text-xs px-4 py-1 rounded">
              Sign In
          </button>
          <div className="w-8 h-8 text-white">
              <BiMenu className="w-full h-full" />
          </div>

        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navLgColor-700 px-4 py-2">
        <div className="md:hidden">
          {
            /* ***Mobile screen*** */
            <Navsm />
          }
        </div>

        <div className="hidden lg:hidden md:flex">
          {
            /* ***Tablet screen*** */
            <Navmd />
          }
        </div>

        <div className="hidden lg:flex">
          {
            /* ***Desktop Screen*** */
            <Navlg />
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
