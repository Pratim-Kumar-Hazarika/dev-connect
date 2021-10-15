import { createAsyncThunk, createSlice,current } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserFollowingsFromServer = createAsyncThunk("userfollowings/fromServer",async({token})=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/following`,{
        headers: {
            authorization: token
        }})
    return response.data.followings;
})
export const getAllFollowingsFromServer = createAsyncThunk("allFollowingsSlice/fromServer",async({token})=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/following`,{
        headers: {
            authorization: token
        }})
    return response.data.allFollowings;
})
const followingSlice = createSlice({
    name :"userFollowingSlice",
    initialState:{
        status :"user followings not requested from server",
        userfollowings :[],
        allFollowings:[],
        error :null
    },
    reducers:{
        removeFollowingFromLoggedInUser(state,action){
            // console.log("clcikeddddd",action,current(state))
            const userUpdatedFollowingList = state.userfollowings.filter((user)=>user._id !== action.payload._id)
            state.userfollowings = userUpdatedFollowingList
        },
        removeLoggedInUserFromFollowings(state,action){
            const updatedAllFollowingsList = state.allFollowings.map((list)=>(
                list._id === action.payload.user ? {
                    ...list,
                    userDetails:list.userDetails.filter((user)=>user._id !== action.payload.admin)
                } :list
            ))
            state.allFollowings = updatedAllFollowingsList
        },
        addFollowingToLoggedInUser(state,action){
            const getUser = state.allFollowings.filter((user)=>user._id === action.payload.accountId)
            const getParticularUser = getUser[0].userDetails.filter((user)=>user._id === action.payload.userToBeFollowed)
            state.userfollowings.push(getParticularUser[0])
     
        }
    },
    extraReducers:{
        [getUserFollowingsFromServer.pending]: (state, action) => {
            state.status = "sending request to get user followings"
        },
        [getUserFollowingsFromServer.fulfilled]: (state, action) => {
            state.status = "user followings recieved from server"
            state.userfollowings = action.payload
        },
        [getUserFollowingsFromServer.rejected]: (state, action) => {
            state.status = "error while getting user followings"
        },
        [ getAllFollowingsFromServer.pending]: (state, action) => {
            state.status = "sending request to get all followings"
        },
        [getAllFollowingsFromServer.fulfilled]: (state, action) => {
            state.status = "all followings recived from server"
            state.allFollowings = action.payload
        },
        [getAllFollowingsFromServer.rejected]: (state, action) => {
            state.status = "error while getting all the followings"
        },
    }
})

export const {removeFollowingFromLoggedInUser,removeLoggedInUserFromFollowings,addFollowingToLoggedInUser} = followingSlice.actions;

export default followingSlice.reducer;