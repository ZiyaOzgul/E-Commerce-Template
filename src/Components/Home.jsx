import React, { useContext, useEffect, useState } from "react";
import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";
import ProductsContext from "../Services/Provider";
import axios, { all } from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const { allProducts, setAllProducts } = useContext(ProductsContext);

  const [currentId, setCurrentId] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (currentId === productLength - 1) {
  //       setCurrentId(0);
  //     } else {
  //       setCurrentId((prevId) => prevId + 1);
  //     }
  //   }, 3000);
  // }, []);

  if (allProducts == "") {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setAllProducts(result.data);
    });
    if (allProducts == "") {
      return (
        <div className="w-full h-screen flex items-center justify-center ">
          <p className="text-4xl font-bold ">Loading</p>
        </div>
      );
    }
  }
  return (
    <div className="w-full h-[780px] m-auto py-16 px-4 relative group overflow-hidden ">
      <Link to={`/products/${currentId + 1}`}>
        <div
          key={currentId}
          style={{
            backgroundImage: `url(${allProducts[currentId].image})`,
          }}
          className="w-full h-full px-4 rounded-2xl  bg-center  bg-no-repeat bg-scroll hover:opacity-90 hover:scale-110 transition-all  duration-500 cursor-pointer overflow-hidden "
        ></div>
      </Link>
      <div className="absolute left-10 bottom-10 group-hover:mb-8 transition-all duration-500 ">
        <h1 className="font-semibold text-xl text-gray-500">
          {allProducts[currentId].title}
        </h1>
        <h4 className="font-medium text-sm ">
          Category:{" "}
          <i className="font-bold text-lg text-gray-400">
            {allProducts[currentId].category}
          </i>
        </h4>
        <h2 className="font-semibold text-xl text-gray-500">
          Price{" "}
          <i className="font-bold text-xl text-gray-600">
            {allProducts[currentId].price} $
          </i>
        </h2>
      </div>
      <button
        onClick={() => {
          if (currentId == 0) {
            setCurrentId(Object.keys(allProducts).length - 1);
          } else {
            setCurrentId(currentId - 1);
          }
        }}
        className="absolute left-5 top-1/2 w-10 h-10 opacity-90 hover:opacity-100 bg-slate-600 text-white hover:bg-slate-700 hover:scale-110 transition-all duration-500 rounded-full"
      >
        <UilArrowLeft className="w-full h-full"></UilArrowLeft>
      </button>
      <button
        onClick={() => {
          if (currentId == Object.keys(allProducts).length - 1) {
            setCurrentId(0);
          } else {
            setCurrentId(currentId + 1);
          }
        }}
        className="absolute right-5 top-1/2 w-10 h-10 opacity-90 hover:opacity-100 bg-slate-600 text-white hover:bg-slate-700 hover:scale-110 transition-all duration-500 rounded-full"
      >
        <UilArrowRight className="w-full h-full"></UilArrowRight>
      </button>
    </div>
  );
};
