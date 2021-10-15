import React from 'react'
import {Text} from "@chakra-ui/react"
export default function CommentsFeedText({comments}) {
    let newComment =[...comments]; 
    newComment =(newComment?.reverse()).slice(0,3)
    newComment = newComment.reverse()
    return (
         <> 
    {

    newComment.map((comment) => (
            <Text ml={5} fontSize="md" color={"black"}>
                <span
                    style={{
                    fontWeight: "600",
                    color: "black"
                }}>{comment._id.username}
                </span>
                {comment.parrentComment}</Text>
        ))

    }
     </>
       
    )
}