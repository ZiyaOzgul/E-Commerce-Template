import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import ProductsContext from "../Services/Provider";
export const Navbar = () => {
  const { user } = useContext(ProductsContext);
  return (
    <div className=" h-16 bg-slate-200 shadow-lg text-gray-600 space-x-6 lg:space-x-12 px-4 py-5 lg:px-12 flex items-center justify-between w-full">
      <Link to="/">
        <i className="font-bold text-2xl lg:text-6xl uppercase py-2">Logo</i>
      </Link>
      <div className="flex items-center justify-center container mx-auto space-x-4">
        <Link to="/products">
          <p className="font-medium text-lg lg:text-2xl hover:text-red-500 duration-500 ease-in-out ">
            Products
          </p>
        </Link>
        <Link to="/contact">
          <p className="font-medium text-lg lg:text-2xl hover:text-red-500 duration-500 ease-in-out ">
            Contact
          </p>
        </Link>
        <Link to="/about">
          <p className="font-medium text-lg lg:text-2xl hover:text-red-500 duration-500 ease-in-out ">
            About Us
          </p>
        </Link>
      </div>
      <div className=" container flex items-center justify-center">
        <Link to="/signIn">
          <p className="  font-bold text-xl px-2 py-1 bg-gray-700 text-white  hover:bg-gray-500 duration-500 ease-in-out rounded-lg cursor-pointer ml-4">
            Sign In
          </p>
        </Link>
        <Link to="/login">
          <p className="font-bold text-xl px-2 py-1 bg-gray-700 text-white  hover:bg-gray-500 duration-500 ease-in-out rounded-lg cursor-pointer ml-4">
            Login
          </p>
        </Link>
      </div>
      <Link to="/cart">
        <div className="relative group ">
          <UilShoppingCartAlt className="text-gray-600 font-bold text-6xl z-20 group-hover:scale-110 transition-all ease-in-out duration-500"></UilShoppingCartAlt>
          {user > 0 ? (
            <div className="absolute -top-4 -right-3 rounded-2xl bg-red-600 text-white w-6 h-6 group-hover:scale-110  group-hover:-right-4 transition-all ease-in-out duration-500">
              <p className=" text-center">{user}</p>
            </div>
          ) : null}
        </div>
      </Link>
    </div>
  );
};
