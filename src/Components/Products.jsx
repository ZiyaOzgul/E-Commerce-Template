import React, { useContext, useEffect } from "react";
import ProductsContext from "../Services/Provider";
import axios from "axios";
import { Link } from "react-router-dom";
import { UilHeart } from "@iconscout/react-unicons";
export const Products = () => {
  const { allProducts, setAllProducts, isFavorite, setIsFavorite } =
    useContext(ProductsContext);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setAllProducts(result.data);
    });
  }, []);
  if (allProducts == "") {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <p className="text-4xl font-bold ">Loading</p>
      </div>
    );
  } else
    return (
      <div className="flex items-start justify-normal mt-6 lg:mt-12 mx-4 lg:mx-12">
        <div className="grid grid-cols-4 gap-4 bg-gradient-to-br bg-slate-50 to-gray-50">
          {allProducts.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <div className="relative border-2 border-black container group overflow-hidden rounded-lg px-6 py-10">
                <img
                  src={item.image}
                  alt="product image"
                  className="group-hover:opacity-50 group-hover:scale-110 transition-all ease-in-out duration-500  "
                />
                <div className="opacity-0 absolute left-0 bottom-4 group-hover:mb-10   group-hover:opacity-100 transition-all duration-500 space-y-6 pl-1">
                  <h1 className="font-semibold text-xl text-gray-500">
                    {item.title}
                  </h1>
                  <h4 className="font-medium text-sm ">
                    Category:{" "}
                    <i className="font-bold text-lg text-gray-400">
                      {item.category}
                    </i>
                  </h4>
                  <h2 className="font-semibold text-xl text-gray-500">
                    Price{" "}
                    <i className="font-bold text-xl text-gray-600">
                      {item.price}
                    </i>
                  </h2>
                </div>
                <div className="absolute top-4 right-4 shadow-2xl  bg-red-800 p-3 text-white rounded-full hover:text-red-600 hover:scale-110  transition-all duration-500  ease-in-out ">
                  <UilHeart></UilHeart>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
};
