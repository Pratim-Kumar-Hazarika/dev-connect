import React from 'react'
import {
    Avatar,
    Button,
    Input,
    Flex,
    Box,
    Text
} from "@chakra-ui/react"
import UserAvatar from '../Avatar/UserAvatar'
import CommentsText from './CommentsText'
import Comments from './Comments'
import { useState } from 'react'
export default function CommentsContainer({comments, replyHandler}) {
    // console.log({comments})
    const[num,setNum] = useState(1)
function viewHideReplyHandler({childrenCommentsArray}){
// console.log("clicked",{childrenCommentsArray})

if(num !== childrenCommentsArray.length){
    setNum(value=>value+1)
}else{
    console.log("hide kar")
    setNum(1)
}
}
function testFunction({childrenArray}){
console.log({childrenArray})
}
    return (
        <Box border="" mt={2} height={"355px"} overflowX={"scroll"}>
            {comments
                ?.map((comment) => (
                    <Box ml={4}  mt={2}border=" ">
                        <Flex alignItems={" "}>
                            <UserAvatar image={comment._id.profilePicture}/>
                            <Box>
                                <CommentsText userName={comment._id.username} comment={comment.parrentComment}/>
                                <Box
                                    onClick={() => replyHandler({replyToUsername:comment._id.username,flag:"parrentComment",parrentCommentId:comment.parrentCommentId})}
                                    cursor={"pointer"}
                                    ml={4}
                                    mt={2}
                                    color="gray"
                                    fontWeight={"bold"}
                                    fontSize={"15px"}>
                                    Reply
                                </Box>
                                <Box
                                    onClick={()=>viewHideReplyHandler({childrenCommentsArray:comment?.childrenComments})}
                                    cursor={"pointer"}
                                    ml={4}
                                    mt={2}
                                    color="gray"
                                    fontWeight={"bold"}
                                    fontSize={"14px"}>{comment?.childrenComments?.length === 0 ? '' : `-----View${comment?.childrenComments?.length} replies` }
                                </Box>
                                    {testFunction({childrenArray:comment.childrenComments})}
                                {comment
                                    .childrenComments.slice(0,num)
                                    .map((childrenComment) => (
                                    <Comments
                                        image={childrenComment._id.profilePicture}
                                        userName={childrenComment._id.username}
                                        comment={childrenComment.comment}
                                        onClick={()=>replyHandler({replyToUsername:childrenComment._id.username,flag:"childrenComments",parrentCommentId:comment.parrentCommentId})}/>
                                        ))
                                    }
                            </Box>
                        </Flex>
                    </Box>
                ))
}

        </Box>
    )
}
