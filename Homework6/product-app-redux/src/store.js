import { configureStore } from "@reduxjs/toolkit";
import productReducer from './store/productSlice';

const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export default store;