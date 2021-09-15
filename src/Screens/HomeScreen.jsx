import { Box } from '@chakra-ui/layout'
import React from 'react'
import FeedPosts from '../components/FeedPosts/FeedPosts'
import Header from '../components/Header/Header'
export default function HomeScreen() {
    return (
        <Box>
            <Header/>
            {/* Tweet component */}
            {/* ---- */}
            {/* Flex [posts , Follow users] */}
            {/* First do posts */}
            {/* {then users} */}
            <FeedPosts/>
        </Box>
    )
}
