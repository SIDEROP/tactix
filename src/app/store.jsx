import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";

let store = configureStore({
    reducer:{
        app:user
    }
})

export default store
