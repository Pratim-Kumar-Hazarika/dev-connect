import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsersFromServer = createAsyncThunk("allUsersSlice/fromServer",async({token})=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`,{
        headers: {
            authorization: token
        }})
    return response.data.allUsers;
})

const allUsersSlice = createSlice({
    name :"allUsers",
    initialState:{
        state:"all Users not fetched",
        allUsers :[],
        error :null
    },
    reducers:{},
    extraReducers:{
        [getAllUsersFromServer.pending]: (state, action) => {
            state.status = "sending request to get all users"
        },
        [getAllUsersFromServer.fulfilled]: (state, action) => {
            state.status = "all users recived from server"
            state.allUsers = action.payload
        },
        [getAllUsersFromServer.rejected]: (state, action) => {
            state.status = "error while getting all users"
        },
    }
})

export default allUsersSlice.reducer;