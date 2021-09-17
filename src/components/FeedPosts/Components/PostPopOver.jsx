import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button
} from "@chakra-ui/react"
import {MdiDotsVertical} from '../Icons/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, deletePostFromServer } from '../../../features/post/postSlice'
export default function PostPopOver({_id}) {
    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.authentication)
    function deletePostHandler(_id){
        dispatch(deletePost({_id:_id}))
        dispatch(deletePostFromServer({postId:_id,token:token}))
    }
    return (
        <Popover >
            <PopoverTrigger >
                <Button
                    variant="ghost"
                    size="xs"
                    color="gray"
                    fontWeight="medium"
                    border="1px solid #F9FAFB">
                    <MdiDotsVertical/>
                </Button>
            </PopoverTrigger>
            <PopoverContent >
                <PopoverArrow/>
                <PopoverCloseButton/>
                <PopoverBody >
                    <Button mt={"2px"} onClick={()=>deletePostHandler(_id)} variant="ghost" size="sm" fontSize="md" fontWeight="medium">
                        Delete Post
                    </Button>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}