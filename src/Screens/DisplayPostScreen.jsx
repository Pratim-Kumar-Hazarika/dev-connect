import { Box } from '@chakra-ui/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import PostCaption from '../components/FeedPosts/Components/PostCaption'
import PostLikeComment from '../components/FeedPosts/Components/PostLikeComment'
import UserNameTime from '../components/FeedPosts/Components/UserNameTime'
import Header from '../components/Header/Header'
import DisplayPostImage from '../components/Image/DisplayPostImage'

export default function DisplayPostScreen() {
    const {postId} = useParams()
    console.log({postId})
    const posts = useSelector(state => state.post)
    console.log({posts})
    const getPostDetails = posts.post.filter((post)=>post._id === String(postId))
    console.log({getPostDetails})
    const {_id,image,caption} = getPostDetails[0]
    return (
        <Box>
            <Header/>
            <Box
            mt={5}
            border="1px solid #dbdbdb"
            p={3}
            borderRadius="5px"
            className="post_card"

            >
            <UserNameTime/>
            <PostCaption caption={caption}/>
            <DisplayPostImage imageSrc={image}/>
            <PostLikeComment/>
        </Box >
        </Box>
    )
}
