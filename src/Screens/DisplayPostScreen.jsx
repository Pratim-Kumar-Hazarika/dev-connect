import {Box, Flex, Spacer} from '@chakra-ui/layout'
import {Avatar, Button, Image, Input, useDisclosure} from "@chakra-ui/react"
import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router'
import PostCaption from '../components/FeedPosts/Components/PostCaption'
import PostLikeComment from '../components/FeedPosts/Components/PostLikeComment'
import UserNameTime from '../components/FeedPosts/Components/UserNameTime'
import Header from '../components/Header/Header'
import DisplayPostImage from '../components/Image/DisplayPostImage'
import PostPopOver from '../components/FeedPosts/Components/PostPopOver';
import {Grid, GridItem, Text} from "@chakra-ui/react"

import CommentsContainer from '../components/Comments/CommentsContainer'
import {useDispatch} from 'react-redux'
import {childrenComment, parrentComment} from '../features/post/postSlice'
import {removeFirstWord} from '../Utils/removeFirstWord'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton
} from "@chakra-ui/react"
import EmojiPicker from '../components/EmojiPicker/EmojiPicker'
import EmojiInputTextBox from '../components/Comments/EmojiInputTextBox'
export function FluentEmoji24Regular(props) {
    return (
        <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" {...props}>
            <g fill="none">
                <path
                    d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10.001-10.002 10.001c-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5zM8.462 14.784A4.491 4.491 0 0 0 12 16.502a4.492 4.492 0 0 0 3.535-1.714a.75.75 0 1 1 1.177.93A5.991 5.991 0 0 1 12 18.002a5.991 5.991 0 0 1-4.716-2.29a.75.75 0 0 1 1.178-.928zM9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75zm6 0a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.499z"
                    fill="currentColor"></path>
            </g>
        </svg>
    )
}
export default function DisplayPostScreen() {
    const {postId} = useParams()
    const getPost = useSelector(state => state.post.feedPosts.filter((post) => post._id === postId))
    const allState = useSelector(state => state.post)
    const [chosenEmoji,
        setChosenEmoji] = useState(' ');

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject.emoji);
        setShowEmoji(false)
    };
    const {
        caption,
        image,
        profilePic,
        userId,
        _id,
        userName,
        likes,
        comments,
        userId: postBelongingToUser
    } = getPost[0] || []

    const [replyTo,
        setReplyTo] = useState('')
    const [replyToUsername,
        setReplyToUsername] = useState('')
    const [userNameFlag,
        setUserNameFlag] = useState(false)
    const [commentFlag,
        setCommentFlag] = useState(false)
    const [commentParrentId,
        setCommentParentId] = useState('')
    const {userId: loggedInUser, username: loggedInUserUsername, profilePicture: loggedInUserProfilePic} = useSelector(state => state.profileSettings)
    const initRef = React.useRef()
    const dispatch = useDispatch()
    function replyHandler({replyToUsername, flag, parrentCommentId}) {

        if (initRef.current) 
            initRef.current.focus();
        setReplyTo(replyToUsername)
        setUserNameFlag(replyToUsername)
        setCommentFlag(flag)
        setCommentParentId(parrentCommentId)
        // setReplyToUsername(replyToUsername)
    }

    const commentor = {
        parrentComment: removeFirstWord(replyTo, userNameFlag),
        parrentCommentId: String(Math.random()),
        _id: {
            _id: loggedInUser,
            username: loggedInUserUsername,
            profilePicture: loggedInUserProfilePic
        },
        childrenComments: []
    }
    const childrenCommentor = {
        comment: removeFirstWord(replyTo, userNameFlag),
        _id: {
            _id: loggedInUser,
            username: loggedInUserUsername,
            profilePicture: loggedInUserProfilePic
        },
        parrentCommentId: String(Math.random())
    }

    function postCommentHandler() {

        if (commentFlag === false) {
            dispatch(parrentComment({postId: postId, postBelongingToUser: postBelongingToUser, commentor: commentor}))

        } else if (commentFlag === "childrenComments") {
            dispatch(childrenComment({postId: postId, postBelongingToUser: postBelongingToUser, parrentCommentId: commentParrentId, commentor: childrenCommentor}))
            setCommentFlag(false)
        }
        setReplyTo('')
    }
    const [showEmoji,setShowEmoji] = useState(false)
    function emojiHandler() {
        setShowEmoji(true)
    }
    function inputHandler(e) {
        setChosenEmoji('')
        setReplyTo(e.target.value)
    }
    return (
        <Box height={"100vh"} bgColor={"#EFEFEF"}>
            <Header/>
            <Box className="" width={""} margin={""}>
                <Grid templateColumns="repeat(1, 1fr)" gap={1}>
                    <Box w="100%" height={""} position={"relative"}>
                        <Box bgColor={"white"} mt={5} p={3} borderRadius="5px" className="post_card">
                            <Flex >
                                <UserNameTime userImage={profilePic} userName={userName}/>
                                <Spacer/>
                                <Box>
                                    {userId === loggedInUser
                                        ? <PostPopOver _id={_id}/>
                                        : ""
}
                                </Box>
                            </Flex>
                            <PostCaption caption={caption}/>
                            <Box max>
                                <Box maxWidth="100%" ml={4} mt={5}>
                                    <Image boxSize="100%" objectFit="cover" maxW={"95%"} ml={"0.5rem"} src={image}/>
                                </Box>

                            </Box>
                            <CommentsContainer comments={comments} replyHandler={replyHandler}/>
                            <Box
                                borderTop="1px solid #DBDBDB"
                                position={""}
                                bottom={"0"}
                                width={"100%"}
                                bgColor={"white"}>
                                <PostLikeComment
                                    postBelongingToUser={postBelongingToUser}
                                    postId={_id}
                                    likesCount
                                    ={likes
                                    ?.length || 0}
                                    likedUsers={likes}/>
                                <Flex border="" justifyContent={"space-evenly"} mt={5}>
                                    <EmojiInputTextBox
                                        initRef={initRef}
                                        replyTo={replyTo}
                                        chosenEmoji={chosenEmoji}
                                        inputHandler={inputHandler}
                                        onEmojiClick={onEmojiClick}/>
                                    <Box width={"15%"}>
                                        <Button
                                            variant={"ghost"}
                                            disabled={replyTo
                                            ? false
                                            : true}
                                            onClick={postCommentHandler}>Post</Button>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box >
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}
