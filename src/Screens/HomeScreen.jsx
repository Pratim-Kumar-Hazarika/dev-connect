import { Box } from '@chakra-ui/layout'
import React from 'react'
import FeedPosts from '../components/FeedPosts/FeedPosts'
import Header from '../components/Header/Header'
import Tweet from '../components/Tweet/Tweet'
export default function HomeScreen() {
    return (
        <Box>
            <Header/>
            {/* Tweet component */}
            <Tweet/>
            {/* ---- */}
            {/* Flex [posts , Follow users] */}
            {/* First do posts */}
            {/* {then users} */}
            <FeedPosts/>
        </Box>
    )
}
