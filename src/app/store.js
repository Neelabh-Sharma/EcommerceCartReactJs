import { configureStore } from "@reduxjs/toolkit";
import Productreducer from '../features/Product'
import  CartFunc  from "../features/CartData";
export const store = configureStore({
    reducer : {
        product : Productreducer,
        cart : CartFunc,
    },
});