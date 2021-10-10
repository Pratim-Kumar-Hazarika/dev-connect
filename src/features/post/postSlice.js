import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import axios from "axios";
// const userStatus = JSON.parse(localStorage.getItem("userStatus"))
// console.log("from post slice", {userStatus})
export const newPost = createAsyncThunk("uplod/newpost", async({caption, imageSrc, token}) => {
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/post`, {
        caption: caption,
        imageUrl: imageSrc || "no-image"
    }, {
        headers: {
            authorization: token
        }
    })
    // console.log("response is", response)
})
export const userPostsFromServer = createAsyncThunk("userPosts/fromserver", async({token}) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/post`, {
        headers: {
            authorization: token
        }
    })
    const posts = response.data.posts.map((post)=>(
        {
            ...post.post,
            userId:post.userId,
            userName:post.userName,
            userProfilePic:post.userProfilePic
        }
    ))
    return posts;
  
})

export const feedPostsFromServer = createAsyncThunk("feedPosts/fromserver", async({token}) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`, {
        headers: {
            authorization: token
        }
    })
    const allPosts = response.data.posts.map((allDetails)=>(
        allDetails.posts.map((post)=>(
            {
                ...post,
                userId:allDetails._id._id,
                userName:allDetails._id.username,
                profilePic:allDetails._id.profilePicture
            }
        
        ))
    ))
    console.log("Yo from server",allPosts)
    let FEED_POSTS =[]
    function mergeAllArrays(){     
        for(let i= 0;i <allPosts.length ; i ++){
            if(i !== allPosts.length){
                FEED_POSTS.push(...allPosts[i])
            }
        }   
    }
    mergeAllArrays()
    
    console.log("Yo FEDD_POSTS",FEED_POSTS)
    return response.data.posts
  
})

export const deletePostFromServer = createAsyncThunk("deletePost/fromserver",async({postId,token})=>{
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/post/delete`,{
        postId:postId
    } ,{
        headers: {
            authorization: token
        }
    })
    // console.log("deleted,response",response)
})

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        post: [],
        status: "idle",
        feedPosts :[],
        feedStatus:"idle"

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
           
            state.post = action.payload
            
        },
        [feedPostsFromServer.pending]: (state, action) => {
            state.feedStatus = "sending request to get the feed posts"
        },
        [feedPostsFromServer.fulfilled]: (state, action) => {
            state.feedStatus = "feed posts are fetched from server"
          
            state.feedPosts = action.payload
            
        },
    }
})

export const {
    createPost,
    deletePost
} = postSlice.actions

export default postSlice.reducer;