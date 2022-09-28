 import { createContext, useState } from "react";

 import PRODUCTS from '../shop-data.json';

 export const ProdcutContext = createContext({
    products : [],
 });

export const ProductsProvider =( { children}) => {
    const[products,setProducts] =useState(PRODUCTS);
    const value = { products};
    return ( 
        <ProdcutContext.Provider value={value}>{children}</ProdcutContext.Provider>
    )
}