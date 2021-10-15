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
    const {accountId} = useParams()
    const {allUsers} = (useSelector(state=>state.allUsers))
    const filterUser = allUsers.filter((user)=>user._id === accountId)
    const {profilePicture,bio,email,gender,name,username,website,_id} = filterUser[0] || {}

    const getUserPosts = useSelector(state=>state.post.feedPosts.filter((posts)=>posts.userId === (accountId) )) || []
    console.log({getUserPosts})


    return (
        <Box >
            <Header/>
            <ProfilePicture imageSrc={profilePicture || ''}/>
            <UserName username={username} gender={gender}/>
            <Center mt={9} justifyContent="space-around">
                <UserFollowersFollowingPosts
                  _id ={ accountId}
                    text={"Following"}
                    btnText={"Following"}/>
                <UserFollowersFollowingPosts _id ={ accountId}  text={"Followers"} btnText ={"Remove"}/>
                <PostsData count={ getUserPosts.length || 0} text={"Posts"}/>
            </Center>
            <UserBio userbio={bio}/>
            <UserPosts  _id ={accountId}/>
        </Box>
    )
}
