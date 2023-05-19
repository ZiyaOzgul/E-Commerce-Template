import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsContext from "../Services/Provider";
import axios from "axios";

export const Product = () => {
  let { productid } = useParams();
  productid = productid - 1;
  const { allProducts, setAllProducts, setUser, user } =
    useContext(ProductsContext);
  if (allProducts == "") {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setAllProducts(result.data);
    });
  }
  return (
    <div className="w-full h-screen bg-gradient-to-br from-rose-50 to-pink-50 ">
      <div className="w-full h-full  px-10 space-x-6 lg:space-x-12 flex items-center justify-start bg-gradient-to-br from-rose-50 to-pink-50 ">
        <div className="border border-red-300 rounded-md h-3/5 w-1/4 group overflow-hidden">
          <img
            src={allProducts[productid].image}
            alt="product image"
            className="w-full h-full rounded-md group-hover:opacity-80 group-hover:scale-110 transition-all duration-500 "
          />
        </div>
        <div className="px-4 lg:px-6 space-y-6 lg:space-y-12 flex flex-col items-center justify-start">
          <h1 className="font-bold text-2xl lg:text-6xl">
            {allProducts[productid].title}
          </h1>
          <h3 className="font-medium text-sm">
            <i className="font-bold">Description: </i>
            {allProducts[productid].description}
          </h3>
          <h2 className="font-semibold ">
            <i className="font-bold">Categories: </i>
            {allProducts[productid].category}
          </h2>
          <h2 className="font-bold text-2xl lg:text-6xl text-red-400">
            <i className="text-4xl">Price: </i>
            {allProducts[productid].price} $
          </h2>
          <div className="mt-6 flex items-center justify-between space-x-12">
            <button
              onClick={() => {
                setUser((prevCart) => prevCart + 1);
                console.log(user);
              }}
              className="outline-none px-5 py-2 align-middle font-semibold text-white bg-rose-600 hover:bg-rose-500 active:outline active:outline-white active:scale-90 duration-300 ease-in-out rounded-2xl"
            >
              Buy
            </button>
            <Link to="/products">
              <button className="outline-none px-5 py-2 align-middle font-semibold text-white bg-rose-600 hover:bg-rose-500 active:outline active:outline-white active:scale-90 duration-300 ease-in-out rounded-2xl">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
