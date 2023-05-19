import { createContext, useState } from "react";
import React from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState("");
  const [user, setUser] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const values = {
    allProducts,
    setAllProducts,
    user,
    setUser,
    isFavorite,
    setIsFavorite,
  };
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContext;
