import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";
const userStatus = JSON.parse(localStorage.getItem("userStatus"))
console.log("from post slice", {userStatus})
export const newPost = createAsyncThunk("uplod/newpost", async({caption, imageSrc, token}) => {
    console.log("fucking called")
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/post`, {
        caption: caption,
        imageUrl: imageSrc || "no-image"
    }, {
        headers: {
            authorization: token
        }
    })
    console.log("response is", response)
})
export const userPostsFromServer = createAsyncThunk("userPosts/fromserver", async({token}) => {
    console.log("called")
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/post`, {
        headers: {
            authorization: token
        }
    })
    console.log('response from server', response.data.userPosts.posts)
    console.log("called")
    return response.data.userPosts.posts
  
})

export const deletePostFromServer = createAsyncThunk("deletePost/fromserver",async({postId,token})=>{
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/post/delete`,{
        postId:postId
    } ,{
        headers: {
            authorization: token
        }
    })
    console.log("deleted,response",response)
})

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        post: [],
        status: "idle",
        userPosts: []

    },
    reducers: {
        createPost: (state, action) => {
            state
                .post
                .push(action.payload)
        },
        deletePost (state,action){
            const newPosts = state.post.filter(post => post._id !== action.payload._id)
            state.post = newPosts
        }
    },
    extraReducers: {
        [newPost.pending]: (state, action) => {
            state.status = "sending request"
        },
        [newPost.fulfilled]: (state, action) => {
            state.status = "image uploded successfully"
        },
        [newPost.rejected]: (state, action) => {
            state.status = "something happend"
        },
        [userPostsFromServer.pending]: (state, action) => {
            state.status = "sending request to get the posts"
        },
        [userPostsFromServer.fulfilled]: (state, action) => {
            console.log("yo the action from server",{action})
            state.post = action.payload
            console.log("lol updated",current(state))
        },
    }
})

export const {
    createPost,
    deletePost
} = postSlice.actions

export default postSlice.reducer;