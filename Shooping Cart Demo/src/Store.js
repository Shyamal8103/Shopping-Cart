import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './Cartslice'
const store = configureStore({
    reducer:{
        data : cartreducer
    }
})

export default store