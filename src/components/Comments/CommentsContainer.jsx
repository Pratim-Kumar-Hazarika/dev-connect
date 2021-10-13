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
import { useParams } from 'react-router'
import { showRepliesNumber, viewHideReplyHandler} from '../../Utils/viewHideReplyHandler'

export default function CommentsContainer({comments, replyHandler}) {
    const {postId} = useParams()
    let filterComments;
    const [priorityArray,setPriorityArray] = useState()
    filterComments = priorityArray || comments?.map((comment)=>(
        {
            ...comment,
            childrenComments:comment.childrenComments.slice(0,1)
        }
    ));
    const [modifiedComments,setModifiedComments] = useState(filterComments);

    return (
        <Box border="" mt={2} height={"355px"} overflowX={"scroll"}>
            {modifiedComments
                ?.map((comment,index) => (
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
                                    onClick={()=>viewHideReplyHandler({comment:comment,postId:postId,index,parrentCommentId:comment.parrentCommentId,comments,filterComments,setPriorityArray,setModifiedComments})}
                                    cursor={"pointer"}
                                    ml={4}
                                    mt={2}
                                    color="gray"
                                    fontWeight={"bold"}
                                    fontSize={"14px"}>{comment?.childrenComments?.length === comments[index]?.childrenComments?.length? 'Hide Replies' : (comment?.childrenComments?.length ===0 ? `-----View${(comments[index]?.childrenComments?.length) -1} replies` :`-----View ${showRepliesNumber({num1:comments[index]?.childrenComments?.length,num2:comment?.childrenComments?.length}) } replies`) }
                                </Box>
                               
                                {comment?.childrenComments?.map((childrenComment) => (
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
