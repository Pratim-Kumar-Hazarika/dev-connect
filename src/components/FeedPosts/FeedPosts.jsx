import {
    Box,
    Flex,
    Text,
    Avatar,
    Grid,
    Image,
    Button,
    Spacer
} from '@chakra-ui/react'
import React from 'react'
import {useSelector} from 'react-redux'
import PostCaption from './Components/PostCaption'
import PostImage from './Components/PostImage'
import PostLikeComment from './Components/PostLikeComment'
import PostPopOver from './Components/PostPopOver'
import UserNameTime from './Components/UserNameTime'
import "./FeedPosts.css"
import {MdiDotsVertical} from './Icons/Icons'

export default function FeedPosts() {
    const {feedPosts} = useSelector(state => state.post)
    const {userId:loggedInUser} = useSelector(state=>state.profileSettings)
   console.log({feedPosts})
    return (
        <Box mt={4}>

                    <Box>
                        {feedPosts?.map(({_id, image, caption,profilePic,userId,userName,likes,userId:postBelongingToUser}) => (
                    <Box
                        border="1px solid #dbdbdb"
                        p={3}
                        borderRadius="5px"
                        className="post_card"
                        marginTop="1rem">
                        <Flex>
                            <UserNameTime userImage={profilePic} userName={userName}/>
                            <Spacer/>
                            <Box>
                                {
                                    userId === loggedInUser ?  <PostPopOver _id={_id}/>  :""
                                }
                                                  
                            </Box>
                        </Flex>
                        <PostCaption caption={caption} _id={_id}/>
                        <PostImage imageSrc={image} _id={_id}/>
                        <PostLikeComment postBelongingToUser={postBelongingToUser} postId={_id} likesCount ={likes.length || 0} likedUsers={likes}/>
                    </Box>
                ))
            }
                    </Box>
        </Box>
    )
}