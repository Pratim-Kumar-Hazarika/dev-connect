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

    const posts = useSelector(state => state.post)
    const {userId} = useSelector(state=>state.profileSettings)
    console.log({userId})
    const filterPosts = useSelector(state=>state.post.feedPosts)
    console.log({filterPosts})
    ////change naming convention later
    const getProperPosts = filterPosts.map((post)=>({
        ...post,
        _id :{
            userId : post._id._id,
            userName :post._id.username,
            userAvatar :post._id.profilePicture || ''
        }
    }))
    console.log({getProperPosts})
    return (
        <Box mt={4}>
            {
                getProperPosts.map((post)=>(
                    <Box>
                        {post?.posts?.map(({_id, image, caption}) => (
                    <Box
                        border="1px solid #dbdbdb"
                        p={3}
                        borderRadius="5px"
                        className="post_card"
                        marginTop="1rem">
                        <Flex>
                            <UserNameTime userImage={post._id.userAvatar} userName={post._id.userName}/>
                            <Spacer/>
                            <Box>
                                {userId === post._id.userId ?<PostPopOver _id={_id}/>:""}                             
                            </Box>
                        </Flex>
                        <PostCaption caption={caption} _id={_id}/>
                        <PostImage imageSrc={image} _id={_id}/>
                        <PostLikeComment/>
                    </Box>
                ))
}
                    </Box>
                ))
            }
            {/* {posts?.post?.map(({_id, image, caption}) => (
                    <Box
                        border="1px solid #dbdbdb"
                        p={3}
                        borderRadius="5px"
                        className="post_card"
                        marginTop="1rem">
                        <Flex>
                            <UserNameTime/>
                            <Spacer/>
                            <Box>
                                <PostPopOver _id={_id}/>
                            </Box>
                        </Flex>

                        <PostCaption caption={caption} _id={_id}/>
                        <PostImage imageSrc={image} _id={_id}/>
                        <PostLikeComment/>
                    </Box>
                ))
} */}
        </Box>
    )
}