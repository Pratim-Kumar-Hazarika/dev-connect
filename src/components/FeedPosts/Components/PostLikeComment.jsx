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
                    <Flex>
                        <Button
                            onClick={()=>likeButtonPressedByUser(likeButtonParams)}
                            variant="ghost"
                            size="xs"
                            color="gray"
                            fontWeight="medium"
                            border="1px solid #F9FAFB">
                            <ClarityHeartSolid color={likeColorHandler(likedUsers,loggedInUser)}/>
                        </Button>
                        {likesCount !== 0
                            ? <PostLikesModel
                                    likedUsers={likedUsers}
                                    totalLikes={likesCount}
                                    text={"Likes"}
                                    btnText={"Depends"}/>
                            : ''}
                    </Flex>
                </Box>
                <Box ml={5}>
                    <Button
                        variant="ghost"
                        size="xs"
                        color="gray"
                        fontWeight="medium"
                        border="1px solid #F9FAFB">
                        <FaRegularComment/>
                        <Text ml={2}>35 comments</Text>
                    </Button>
                </Box>
            </Flex>
        </Box>

    )
}

