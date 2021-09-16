import {Button} from '@chakra-ui/button'
import {Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'
import UserFollowersFollowingPosts from '../../Following/UserFollowersFollowingPosts'
import PostLikesModel from '../../PostLikesModel/PostLikesModel'
import {ClarityHeartSolid, FaRegularComment} from '../Icons/Icons'

export default function PostLikeComment() {
    return (
        <Box ml={4} mt={5}>
            <Flex>
                <Box>
                    <Flex>
                        <Button
                            variant="ghost"
                            size="xs"
                            color="gray"
                            fontWeight="medium"
                            border="1px solid #F9FAFB">
                            <ClarityHeartSolid/>
                        </Button>
                        <PostLikesModel totalLikes={55} text={"Likes"} btnText={"Depends"}/>
        
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
