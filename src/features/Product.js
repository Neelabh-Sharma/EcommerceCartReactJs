import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("fetchData",() =>{
    try{
        return axios.get(`https://6463c98b127ad0b8f8915fbb.mockapi.io/e-data`)
        .then((res) => res.data);
    }catch(err){
        console.log(err);
    }
})
export const AddProduct = createAsyncThunk("AddProduct",(data) =>{
    try{
        return axios.post(`https://6463c98b127ad0b8f8915fbb.mockapi.io/e-data`,data)
        .then((res) => res.data)
        .catch((err) =>{console.log(err)});
    }catch(err){
        console.log(err);
    }
})

export const DeleteData = createAsyncThunk("DeleteData",(id) =>{
    try{
        return axios.delete(`https://6463c98b127ad0b8f8915fbb.mockapi.io/e-data/${id}`)
        .then((res) => res.data)
        .catch((err) =>{console.log(err)});
    }catch(err){
        console.log(err);
    }
});
export const UpdateData = createAsyncThunk("UpdateData",({ProductName , imageUrl,Price,Description,id}) =>{
    try{
        return axios.put(`https://6463c98b127ad0b8f8915fbb.mockapi.io/e-data/${id}`,{ProductName , imageUrl,Price,Description})
        .then((res) => res.data)
        .catch((err) =>{console.log(err)});
    }catch(err){
        console.log(err);
    }
});

export const Uploadfunc = createSlice({
    name: "product",
    initialState: {
        loading : false,
        users : [],
        error : null
    },
    extraReducers : {
        [fetchData.pending]: (state) =>{
            state.loading = true; 
        },
        [fetchData.fulfilled]: (state,action) =>{
            state.loading = false;
            state.users = action.payload;
        },
        [fetchData.rejected]: (state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        [AddProduct.pending]: (state) =>{
            state.loading = false;
        },
        [AddProduct.fulfilled]: (state,action) =>{
            state.loading = false;
            state.users.push(action.payload);
        },
        [AddProduct.rejected]: (state,action) =>{
            state.loading = false;
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
        [UpdateData.pending]: (state) => {
            state.loading = true;
        },
        [UpdateData.fulfilled]: (state, action) => {
            console.log("updated user fulfilled", action.payload);
            state.loading = false;
            state.users = state.users.map((ele) =>
              ele.id === action.payload.id ? action.payload : ele
            );
        },
        [UpdateData.rejected]: (state, action) => {
            state.loading = false;    
            state.error = action.payload;
        },
    },
});


export default Uploadfunc.reducer; 