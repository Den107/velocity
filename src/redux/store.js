import {configureStore} from "@reduxjs/toolkit";
import bascketSlice from "./features/bascketSlice";

export const store = configureStore({
    reducer:{bascket: bascketSlice}
})