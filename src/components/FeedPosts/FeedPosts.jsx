import {
    Box,
    Flex,
    Text,
    Avatar,
    Grid,
    Image,
    Button
} from '@chakra-ui/react'
import React from 'react'
import PostCaption from './Components/PostCaption'
import PostImage from './Components/PostImage'
import PostLikeComment from './Components/PostLikeComment'
import UserNameTime from './Components/UserNameTime'
import "./FeedPosts.css"
export default function FeedPosts() {
    return (
        <Box
            mt={5}
            border="1px solid #dbdbdb"
            p={3}
            borderRadius="5px"
            className="post_card"
            >
            <UserNameTime/>
            <PostCaption/>
            <PostImage/>
            <PostLikeComment/>
        </Box >
    )
}
