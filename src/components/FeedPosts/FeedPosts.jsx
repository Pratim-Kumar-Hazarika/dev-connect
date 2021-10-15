import {
    Box,
    Flex,
    Text,
    Avatar,
    Grid,
    Image,
    Button,
    Spacer,
    Input,
   
} from '@chakra-ui/react'
import { Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
  
    PopoverCloseButton,} from "@chakra-ui/react";
    import Picker from 'emoji-picker-react';
import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import { parrentComment } from '../../features/post/postSlice';
import { FluentEmoji24Regular } from '../../Screens/DisplayPostScreen';
import CommentsContainer from '../Comments/CommentsContainer'
import CommentsFeedText from '../Comments/CommentsFeedText';
import EmojiInputTextBox from '../Comments/EmojiInputTextBox'
import TestEmoji from '../TestEmoji';
import PostCaption from './Components/PostCaption'
import PostImage from './Components/PostImage'
import PostLikeComment from './Components/PostLikeComment'
import PostPopOver from './Components/PostPopOver'
import UserNameTime from './Components/UserNameTime'
import "./FeedPosts.css"
import {MdiDotsVertical} from './Icons/Icons'

export default function FeedPosts() {
    const {feedPosts} = useSelector(state => state.post)
    const {userId:loggedInUser,username: loggedInUserUsername, profilePicture: loggedInUserProfilePic} = useSelector(state=>state.profileSettings)
    const dispatch = useDispatch()
    function viewCommentsLength(comment){
        // console.log({comment})
        let totalLengthOfComment = [comment.length]
        comment.forEach((child)=>(
            totalLengthOfComment.push(child.childrenComments.length)
        ))
        const sum = totalLengthOfComment.reduce((a, b) => a + b,0)
        if(sum >2){
            return `View all ${sum -2} comments`
        } return " "
    }
    const [chosenEmoji,setChosenEmoji] = useState(' ');

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject.emoji);
    };
const [inputComment,setInputComment] = useState()
    function postParrentCommentHandler(feedPost){
        const {_id:postId,userId:postBelongingToUser} = feedPost
        const commentor = {
            parrentComment: inputComment,
            parrentCommentId: String(Math.random()),
            _id: {
                _id: loggedInUser,
                username: loggedInUserUsername,
                profilePicture: loggedInUserProfilePic
            },
            childrenComments: []
        }
        dispatch(parrentComment({postId: postId, postBelongingToUser: postBelongingToUser, commentor: commentor}))
        setInputComment('')
     console.log({feedPost})
    }
const [particularPostId,setParticularPostId] = useState()
  function inputCommentHandler({e,_id}){
    setInputComment(e)
    setParticularPostId(_id)
    console.log({particularPostId})

  }
 
    return (
        <Box mt={4}  >

                    <Box border="" bgColor={"#EFEFEF"}>
                        {feedPosts?.map((feedPost) =>{
                        const {_id, image, caption,profilePic,userId,userName,likes,userId:postBelongingToUser,comments} = feedPost ||[]
                         
                 return  <Box className="" p={1} bgColor={"white"} mt={"1rem"} border="1px solid #dbdbdb"  borderRadius="5px" overflow={"hidden"}>
                   <Box
                        // border="1px solid #dbdbdb"
                        // p={1}
                     
                        borderRadius="5px"
                        // className="post_card"
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
                        <Box mt={5} ml={2}><PostCaption caption={caption} _id={_id}/></Box>
                        
                        <PostImage imageSrc={image} _id={_id}/>
                        <PostLikeComment  postBelongingToUser={postBelongingToUser} postId={_id} likesCount ={likes.length || 0} likedUsers={likes}/>
                      
                    </Box>
                   
                    {/* <button onClick={()=>viewCommentsLength(comments)}>Hey</button> */}
                    <Box border="" mt={2}>
                    <Text ml={5} fontSize="md"color={"gray"}>{viewCommentsLength(comments)}</Text>
                  
                     <CommentsFeedText comments={comments}/>    

                    </Box>
              

                    <Box     className="" mt={"1.1rem"} borderTop="1px solid #efefef" >
                        <Flex justifyContent={"space-evenly"}>
                            <Flex alignItems={"center"} width={"90%"}  >
                       
                             {/* <TestEmoji onEmojiClick={onEmojiClick}/> */}
                    
                            <Box width={"92%"}> <Input  _focus={{border:"1px solid white"}}   _hover={{border:"0px solid white"}} name="text" placeholder="Add a comment" border="" value={_id === particularPostId?inputComment :'' }   onChange={(e)=> inputCommentHandler({e:e.target.value,_id})}/></Box>  
                            </Flex>
                            <Box width={""}>
                            <Button disabled={(inputComment !=='' && _id === particularPostId) ? false :true}  variant={"ghost"} color={"#0095F6"}  onClick={()=>postParrentCommentHandler(feedPost)}>Post</Button>
                            </Box>
                            
                            
                        </Flex>
                      
           
            </Box>
                  
                    </Box>
                         } )
            }
                    </Box>
        </Box>
    )
}