import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userStatus = JSON.parse(localStorage.getItem("userStatus"))
console.log("the user status", {userStatus});

export const userLogin = createAsyncThunk("user/login",async({userEmail,userPassword})=>{
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`,{
        email:userEmail,
        password:userPassword
    })
    return response.data;
})

export const userSignup = createAsyncThunk("user/signup",async({userEmail,userName,userFullName,userPassword})=>{
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`,{
        name:userName,
        username:userFullName,
        email:userEmail,
        password:userPassword
    })
    return response.data;
})

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
     name:"authSlice",
       status:"idle",
       token:userStatus?.token ||  " ",
       error :null
    },
    reducers:{
        logoutButtonPressed :(state,actions)=>{
            state.status ="idle"
            state.token = ""
            localStorage.removeItem("userStatus")
        }
    },
    extraReducers:{
        [userLogin.pending]:(state)=>{
            state.status = "pending"
        },
        [userLogin.fulfilled]:(state,action)=>{
            const {token} = action.payload
            state.status ="fulfilled"
            state.token = token
            localStorage.setItem("userStatus",JSON.stringify({token}))  
        },
        [userLogin.rejected]:(state,action)=>{
            state.error = "something went wrong"
        },
        [userSignup.pending]:(state)=>{
            state.status ="signing in"
        },
        [userSignup.fulfilled]:(state,action)=>{
            state.status = "signup sucessfull"
        },
        [userSignup.rejected]:(state)=>{
            state.error = "signup unsucessfull"
        }
    }
})
// localStorage.setItem("userStatus",JSON.stringify({token:"teststst"}))  
export const {logoutButtonPressed} = authSlice.actions;

export default authSlice.reducer;