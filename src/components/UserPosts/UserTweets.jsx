import React from 'react'
import {Box, Grid, Image, Text} from "@chakra-ui/react"
import "./Posts.css"
import {Link, useParams} from "react-router-dom"
import {useSelector} from 'react-redux'

export function UserTweetView({_id, caption}) {
    return (
        <Box
            maxWidth="90%"
            height="120px"
            overflowY="scroll"
            border="1px solid #dbdbdb"
            p={3}
            borderRadius="5px">

            <Link to={`/post/${_id}`}>
                <Text>{caption}</Text>
            </Link>
        </Box>
    )

}
export default function UserTweets({_id}) {
    const tweets = useSelector(state => state.post.post.filter(post => post.flag !== "image-exists")) || {}
    const getUserTweets = useSelector(state => state.post.feedPosts.filter((posts) => posts._id._id === _id).filter((post) => post.flag !== "image-exists")) || []
  
    return (
        <>
        {
            getUserTweets.length === 0 ? <h1>No tweets</h1> :<Box className="posts">
            <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                {
                    _id === "admin" ? tweets
                    ?.map(({_id, image, caption}) => (
                       <UserTweetView _id={_id} caption={caption}/>
                    )) : getUserTweets[0]?.posts
                    ?.map(({_id, image, caption}) => (
                       <UserTweetView _id={_id} caption={caption}/>
                    ))
                }
            </Grid>
        </Box>
        }
        
</>
    )
}
