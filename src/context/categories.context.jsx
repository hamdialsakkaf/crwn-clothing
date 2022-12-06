import React, { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";
// Old Call
//import PRODUCTS from '../shop-data.json';
//import SHOP_DATA from '../shop-data.js';


export const categoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocument();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);
    
    const value = { categoriesMap }
    return (
        <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
    )
    
}