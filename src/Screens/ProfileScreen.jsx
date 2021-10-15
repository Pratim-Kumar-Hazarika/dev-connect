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
import { useSelector } from 'react-redux'

export default function ProfileScreen() {
    const {profilePicture,bio,email,gender,name,username,website} = useSelector(state=>state.profileSettings)
    const allState = useSelector(state=>state)
    console.log({allState})
    const postLength = useSelector((state)=>state.post)
    console.log({postLength})
  
    return (
        <Box >
            <Header/>
            <ProfilePicture imageSrc={profilePicture}/>
            <UserName username={username} gender={gender}/>
            <Center mt={9} justifyContent="space-around">
                <UserFollowersFollowingPosts
                _id ={"admin"}
                    text={"Following"}
                    btnText={"Following"}/>
                <UserFollowersFollowingPosts   _id ={"admin"} text={"Followers"} btnText ={"Remove"}/>
                <PostsData count={postLength.post.length || 0} text={"Posts"}/>
            </Center>
            <UserBio userbio={bio}/>
            <UserPosts    _id ={"admin"}/>
        </Box>
    )
}
