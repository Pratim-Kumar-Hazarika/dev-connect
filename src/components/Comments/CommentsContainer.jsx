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
    const [pataNehi,setPataNehi] = useState(filterComments);
    
        function viewHideReplyHandler({comment,index,parrentCommentId}){

        const getCommentsWhichIsNotPresent = comments[index].childrenComments.filter(comment => !filterComments[index].childrenComments.includes(comment))
        
        ///Show only two comments when clicked -> Left--feature

        const partiCularCommentArray = comment.childrenComments.length 
        const mainCommentsArray =  comments[index].childrenComments.length
      
        if(partiCularCommentArray === mainCommentsArray){
            filterComments = filterComments.map((comment)=>(
                comment.parrentCommentId === parrentCommentId ?{
                    ...comment,
                    childrenComments:comment.childrenComments.slice(0,1)
                }: comment
            ))
            setPriorityArray(filterComments)
           return setPataNehi(filterComments)
        } else{
            filterComments = filterComments.map((comment)=>(
                comment.parrentCommentId === parrentCommentId ?{
                    ...comment,
                    childrenComments:[...comment.childrenComments,getCommentsWhichIsNotPresent[0]]
                }:comment
            ))
            setPriorityArray(filterComments)
           return setPataNehi(filterComments)
        }  
        }
        function showRepliesNumber({num}){
            console.log({num})
            let x = num
            x = x-1
            console.log(x)
return x
        }
    return (
        <Box border="" mt={2} height={"355px"} overflowX={"scroll"}>
            {pataNehi
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
                                    onClick={()=>viewHideReplyHandler({comment:comment,postId:postId,index,parrentCommentId:comment.parrentCommentId})}
                                    cursor={"pointer"}
                                    ml={4}
                                    mt={2}
                                    color="gray"
                                    fontWeight={"bold"}
                                    fontSize={"14px"}>{comment?.childrenComments?.length === comments[index]?.childrenComments?.length? 'Hide Replies' : (comment?.childrenComments?.length ===0 ? `-----Viewss${(comments[index]?.childrenComments?.length) -1} replies` :`-----Viewxxx ${showRepliesNumber({num:comments[index]?.childrenComments?.length}) } replies`) }
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
