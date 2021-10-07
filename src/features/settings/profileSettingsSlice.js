import { createAsyncThunk, createSlice ,current} from "@reduxjs/toolkit";
import axios from "axios";

export const getUserDetailsFromServer = createAsyncThunk("userProfileDetails/profileSettingSlice",async({token})=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/details`,{
        headers: {
            authorization: token
        }})
    return response.data.profileDetails;
})

const profileSettingsSlice = createSlice({
    name:"profileSettings",
    initialState:{
        profilePicture: null,
        name :null,
        username :null,
        website:null,
        bio:null,
        email:null,
        gender:null,
        message:"no request made from profile Slice",
        userId:null
    },
    reducers:{
        changeProfilePictureButtonClicked(state,action){
            console.log("change pic button",current(state),action)
            state.profilePicture = action.payload.imageSrc
            console.log("change after button",current(state),action)
        },
    },
    extraReducers:{
        [getUserDetailsFromServer.pending]:(state)=>{
            state.message ="Request made to server to get profile details"
        },
        [getUserDetailsFromServer.fulfilled]:(state,action)=>{
            const{gender,name,profileBio,profilePicture,username,website,email,userId} = action.payload
            state.message ="Profile details fetched from server"
            state.profilePicture = profilePicture
            state.name  =  name
            state.username  = username
            state.website = website
            state.bio = profileBio
            state.email = email
            state.gender = gender
            state.userId=userId
        },[getUserDetailsFromServer.rejected]:(state)=>{
            state.message ="Request made to server to get profile details"
        }
    }
})
export const {changeProfilePictureButtonClicked} = profileSettingsSlice.actions
export default profileSettingsSlice.reducer;