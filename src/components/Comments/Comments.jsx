import React from 'react'
import {Avatar, Button, Input,Flex,Box,Text} from "@chakra-ui/react"
import UserAvatar from '../Avatar/UserAvatar'
import CommentsText from './CommentsText'

export default function Comments({image, userName,comment,onClick}) {
    return (
        <Flex alignItems={" "} mt={3}>
            <UserAvatar image={image}/>
            <Box>
            <CommentsText userName={userName} comment={comment}/>
                <Box
                onClick={onClick}
                    cursor={"pointer"}
                    ml={4}
                    mt={2}
                    color="gray"
                    fontWeight={"bold"}
                    fontSize={"15px"}>
                    Reply
                </Box>
            </Box>
        </Flex>
    )
}