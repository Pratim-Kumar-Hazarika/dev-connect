import {Button} from '@chakra-ui/button'
import {Box, Flex, Text} from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { postLikeApiRequest, postUnlikeApiRequest } from '../../../apiRequests/postLikeUnlikeApiRequests'
import {likePost, unlikePost} from '../../../features/post/postSlice'
import { likeColorHandler } from '../../../Utils/likeButtonColor'
import { likeButtonPressedByUser } from '../../../Utils/likeButtonPressed'
import UserFollowersFollowingPosts from '../../Following/UserFollowersFollowingPosts'
import PostLikesModel from '../../PostLikesModel/PostLikesModel'
import {ClarityHeartSolid, FaRegularComment} from '../Icons/Icons'

export function PhHeart(props) {
    return (
      <svg width="2.5em" height="2.5em" viewBox="0 0 256 256" {...props}><path d="M128 224a7.998 7.998 0 0 1-3.91-1.02C119.84 220.6 20 163.863 20 92a60.02 60.02 0 0 1 108-36.04A60.02 60.02 0 0 1 236 92c0 30.565-17.714 62.005-52.648 93.446a317.366 317.366 0 0 1-51.443 37.534A7.998 7.998 0 0 1 128 224zm-3.91-14.98zM80 48a44.05 44.05 0 0 0-44 44c0 55.245 73.98 103.719 91.997 114.7C146.007 195.707 220 147.163 220 92a44.009 44.009 0 0 0-84.618-16.95a8 8 0 0 1-14.764 0A43.912 43.912 0 0 0 80 48z" fill="currentColor"></path></svg>
    )
  }
  export function UilComment(props) {
    return (
      <svg width="2.4em" height="2.4em" viewBox="0 0 24 24" {...props}><path d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20z" fill="currentColor"></path></svg>
    )
  }
export default function PostLikeComment({likesCount, likedUsers, postId, postBelongingToUser}) {
    const {userId: loggedInUser, profilePicture, username} = useSelector(state => state.profileSettings)
    const {token} = useSelector(state => state.authentication)
    const dispatch = useDispatch()
    const likeButtonParams = {
        dispatch,likedUsers,loggedInUser,postId,username,profilePicture,token,postBelongingToUser
    }
    return (
        <Box ml={4} mt={5}>
            <Flex>
                <Box>
                    <Box>
                        <Button
                    
                            onClick={()=>likeButtonPressedByUser(likeButtonParams)}
                            variant="ghost"
                            size="xs"
                            color="gray"
                            fontWeight="medium"
                            border="">
                            <PhHeart color={likeColorHandler(likedUsers,loggedInUser)}/>
                        </Button>
                        {likesCount !== 0
                            ? <PostLikesModel
                                    likedUsers={likedUsers}
                                    totalLikes={likesCount}
                                    text={"Likes"}
                                    btnText={"Depends"}/>
                            : ''}
                    </Box>
                </Box>
                <Box ml={0}>
                    <Button
                        variant="ghost"
                        size="xs"
                        color="gray"
                        fontWeight="medium"
                        border="">
                        <UilComment/>
                        {/* <Text ml={2}>35 comments</Text> */}
                    </Button>
                </Box>
            </Flex>
        </Box>

    )
}

