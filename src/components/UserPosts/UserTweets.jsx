import React from 'react'
import {Box, Grid, Image, Text} from "@chakra-ui/react"
import "./Posts.css"

import {useSelector} from 'react-redux'
import { UserTweetView } from '../ProfileScreenTweetView/UserTweetView';

export default function UserTweets({_id}) {
    const loggedInUserTweets = useSelector(state => state.post.post.filter(post => post.flag !== "image-exists")) || []
   
    const notLoggedInUserPosts = useSelector(state=>state.post.feedPosts.filter((posts)=>posts.userId === (_id) )) || []
   
    const filterNotLoggedInUserTweets = notLoggedInUserPosts.filter((posts)=>posts.flag !== "image-exists")|| []
  
    return (
        <>
      <Box className="posts">
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                {
                    _id === "admin" ? loggedInUserTweets
                    ?.map(({_id, image, caption}) => (
                       <UserTweetView _id={_id} caption={caption}/>
                    )) : filterNotLoggedInUserTweets?.map(({_id, image, caption}) => (
                       <UserTweetView _id={_id} caption={caption}/>
                    ))
                }
            </Grid>
        </Box>     
</>
    )
}
