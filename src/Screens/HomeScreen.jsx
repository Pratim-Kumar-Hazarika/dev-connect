import {Box, Flex, Spacer, Text} from '@chakra-ui/layout'
import React from 'react'
import {Avatar, AvatarBadge, AvatarGroup} from "@chakra-ui/react"
import FeedPosts from '../components/FeedPosts/FeedPosts'
import Header from '../components/Header/Header'
import Tweet from '../components/Tweet/Tweet'
import {Grid, GridItem} from "@chakra-ui/react"
import RightSuggestionsBar from '../components/RightSuggestionsBar/RightSuggestionsBar'
import "./HomeScreen.css"
export default function HomeScreen() {
    return (
        <Box bgColor={"#EFEFEF"}>
            <Header/>
            <Box className='main_div'>
                <div class="wrapper">
                    <div class="main">
                        <Tweet/>
                        <FeedPosts/>
                    </div>

                    <div class="sidebar">
                        <RightSuggestionsBar/>
                    </div>
                </div>
            </Box>
        </Box >
    )
}
