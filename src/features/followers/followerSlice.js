import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserFollowersFromServer = createAsyncThunk("userFollowers/fromServer",async({token})=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/followers`,{
        headers: {
            authorization: token
        }})
    return response.data.followers;
})
export const getAllFollowersFromServer = createAsyncThunk("allFollowersSlice/fromServer",async({token})=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/followers`,{
        headers: {
            authorization: token
        }})
    return response.data.allFollowers;
})
const followerSlice = createSlice({
    name :"userFollowerSlice",
    initialState:{
        status :"user followers not requested from server",
        userFollowers :[],
        allFollowers :[],
        error :null
    },
    reducers:{},
    extraReducers:{
        [getUserFollowersFromServer.pending]: (state, action) => {
            state.status = "sending request to get user followers"
        },
        [getUserFollowersFromServer.fulfilled]: (state, action) => {
            state.status = "user followers recieved from server"
            state.userFollowers = action.payload
        },
        [getUserFollowersFromServer.rejected]: (state, action) => {
            state.status = "error while getting user followers"
        },
       [ getAllFollowersFromServer.pending]: (state, action) => {
            state.status = "sending request to get all followers"
        },
        [getAllFollowersFromServer.fulfilled]: (state, action) => {
            state.status = "all followers recived from server"
            state.allFollowers = action.payload
        },
        [getAllFollowersFromServer.rejected]: (state, action) => {
            state.status = "error while getting all the followers"
        },
    }
})

export default followerSlice.reducer;