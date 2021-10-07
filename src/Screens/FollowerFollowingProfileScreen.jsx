import {Box, Center} from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import ProfilePicture from "../components/ProfilePicture/ProfilePicture"
import UserName from "../components/UserName/UserName"

import UserFollowersFollowingPosts from "../components/Following/UserFollowersFollowingPosts"
import UserBio from "../components/UserBio/UserBio"
import UserPosts from '../components/Tabs/UserPosts'
import Model from '../components/Model/Model'
import PostsData from '../components/PostsData'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default function FollowerFollowingProfileScreen() {
    const {profilePicture,bio,email,gender,name,username,website} = useSelector(state=>state.profileSettings)
    const allState = useSelector(state=>state)
    const {accountId} = useParams()
 console.log("calledssssssss",{accountId})
 useEffect(()=>{
    console.log("USE EFFECT IS CALLED BITCH")
 },[accountId])
    return (
        <Box >
            <Header/>
            {/* <ProfilePicture imageSrc={profilePicture}/>
            <UserName username={username} gender={gender}/>
            <Center mt={9} justifyContent="space-around">
                <UserFollowersFollowingPosts
                    text={"Following"}
                    btnText={"Following"}/>
                <UserFollowersFollowingPosts  text={"Followers"} btnText ={"Remove"}/>
                <PostsData count={4} text={"Posts"}/>
            </Center>
            <UserBio userbio={bio}/>
            <UserPosts/> */}
        </Box>
    )
}
