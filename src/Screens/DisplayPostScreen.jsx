import { Box } from '@chakra-ui/layout'
import React from 'react'
import PostCaption from '../components/FeedPosts/Components/PostCaption'
import PostLikeComment from '../components/FeedPosts/Components/PostLikeComment'
import UserNameTime from '../components/FeedPosts/Components/UserNameTime'
import Header from '../components/Header/Header'
import DisplayPostImage from '../components/Image/DisplayPostImage'

export default function DisplayPostScreen() {
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
            <PostCaption/>
            <DisplayPostImage/>
            <PostLikeComment/>
        </Box >
        </Box>
    )
}
