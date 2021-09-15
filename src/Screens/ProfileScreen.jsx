import {Box, Center} from '@chakra-ui/layout'
import React from 'react'
import ProfilePicture from "../components/ProfilePicture/ProfilePicture"
import UserName from "../components/UserName/UserName"

import UserFollowersFollowingPosts from "../components/Following/UserFollowersFollowingPosts"
import UserBio from "../components/UserBio/UserBio"
import UserPosts from '../components/Tabs/UserPosts'
import Model from '../components/Model/Model'
import PostsData from '../components/PostsData'
import Header from '../components/Header/Header'

export default function ProfileScreen() {
    return (
        <Box >
            <Header/>
            <ProfilePicture/>
            <UserName/>
            <Center mt={9} justifyContent="space-around">
                <UserFollowersFollowingPosts
                    count={45}
                    text={"Following"}
                    btnText={"Following"}/>
                <UserFollowersFollowingPosts count={45} text={"Followers"} btnText ={"Remove"}/>
                <PostsData count={4} text={"Posts"}/>
            </Center>
            <UserBio/>
            <UserPosts/>
        </Box>
    )
}
