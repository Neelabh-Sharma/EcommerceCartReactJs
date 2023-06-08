import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddtoCart = createAsyncThunk("AddtoCart",(data) =>{
    return axios.post("https://6463c98b127ad0b8f8915fbb.mockapi.io/Cartdata",data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});
export const Fetchdata = createAsyncThunk("Fetchdata",() =>{
    return axios.get("https://6463c98b127ad0b8f8915fbb.mockapi.io/Cartdata")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});
export const DeleteData = createAsyncThunk("DeleteData",(id) =>{
    try{
        return axios.delete(`https://6463c98b127ad0b8f8915fbb.mockapi.io/Cartdata/${id}`)
        .then((res) => res.data)
        .catch((err) =>{console.log(err)});
    }catch(err){
        console.log(err);
    }
});
export const UpdateData = createAsyncThunk("UpdateData",({Quantity , id}) =>{
    try{
        return axios.put(`https://6463c98b127ad0b8f8915fbb.mockapi.io/Cartdata/${id}`,{Quantity})
        .then((res) => res.data)
        .catch((err) =>{console.log(err)});
    }catch(err){
        console.log(err);
    }
});


export const CartFunc = createSlice({
    name: "product",
    initialState: {
        loading : false,
        users : [],
        error : null
    },
    extraReducers : {
       [AddtoCart.pending] : (state) =>{
        state.loading = true;
       },
       [AddtoCart.fulfilled] : (state,action) =>{
            state.loading = false;
            state.users.push(action.payload)
        },
        [AddtoCart.rejected] : (state,action) =>{
            state.error = action.payload;
        },
        [Fetchdata.pending] : (state) =>{
            state.loading = true;
        },
        [Fetchdata.fulfilled] : (state,action) =>{
            state.loading = false;
            state.users = action.payload;
        },
        [Fetchdata.rejected] : (state,action) =>{
             state.error = action.payload;
        },
        [DeleteData.pending]: (state) =>{
            state.loading  = true;
        },
        [DeleteData.fulfilled]: (state,action) =>{
            state.loading = false;
            const { id } = action.payload;
            if (id) {
              state.users = state.users.filter((post) => post.id !== id);
            }
        },
        [DeleteData.rejected]: (state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        [UpdateData.pending] : (state) => {
            state.loading = true;
        },
        [UpdateData.fulfilled] : (state , action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
            ele.id === action.payload.id ? action.payload : ele
          );
        },
        [UpdateData.rejected] : (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export default  CartFunc.reducer; 