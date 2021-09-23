import React from "react";
import { BiSearch, BiMenu, BiShareAlt, BiChevronLeft } from "react-icons/bi";
import Dropdown from "../Dropdown/Dropdown.component";

const Navsm = () => {
  return (
    <>
      <div className="text-gray-900 flex items-center justify-between">
        <div className="flex items-start">
        <div className="w-7 h-7">
            <BiChevronLeft className="w-full h-full"/>
        </div>
        <div>
          <h1 className="text-xl font-bold text-outline-white">It All Starts Here</h1>          
        </div>
        </div>
        <div className="w-6 h-6 text-gray-500">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
// const Navmd = () => {
//   return (
//     <>
//       <div className="w-full flex items-center px-3 py-2 mt-1 gap-2 bg-white rounded-sm">
//         <div>
//           <BiSearch className="w-full h-full text-grey-100 mt-1 text-md" />
//         </div>
//         <input
//           type="search"
//           className="w-full focus:outline-none"
//           placeholder="Search for Movies, Events, Plays, Sports, Activities"
//         />
//       </div>
//     </>
//   );
// };
const Navlg = () => {
  return (
    <>
      <div className="container mx-auto w-full px-4 py-2 flex justify-between">
        {/* // 1st Div */}
        <div className="w-1/2 flex items-center">
          <div className="w-40 h-full mr-2">
            <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" />
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
          <div className="text-gray-50 text-sm flex items-center hover:text-gray-400 cursor-pointer">
            <Dropdown />
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

const MovieNavbar = () => {
  return (
    <>
      <nav className="lg:bg-navLgColor-700 absolute inset-x-0 z-30 bg-opacity-5 backdrop-filter backdrop-blur-lg px-4 py-2 lg:relative">
        <div className="md:hidden">
          {
            /* ***Mobile screen*** */
            <Navsm />
          }
        </div>

        <div className="hidden lg:hidden md:block">
          {
            /* ***Tablet screen*** */
            <Navsm />
          }
        </div>

        <div className=" hidden lg:flex">
          {
            /* ***Desktop Screen*** */
            <Navlg />
          }
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
