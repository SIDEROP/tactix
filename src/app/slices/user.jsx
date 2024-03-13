import { createSlice } from "@reduxjs/toolkit";




export let user = createSlice({
    name:"user",
    initialState:[],
    loading:false,
    error:null,
    status:false,
    reducers:{
        inc:()=>{

        }
    }
})


export default user.reducer