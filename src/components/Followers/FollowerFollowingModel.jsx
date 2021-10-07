import {Avatar} from '@chakra-ui/avatar'
import {
    Box,
    Flex,
    Spacer,
    VStack,
    Text,
    Button
} from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
export default function FollowerFollowingModel({from,btnText,username,_id,profilePicture}) {
    function followingUnfollowingHandler(){
        console.log("clicked")
        console.log({from})
        console.log({_id})
    }
    return (
        <VStack spacing={4} align="stretch">
            <Flex >
                <Box p="4">
                    <Flex alignItems="center">
                        <Avatar
                            size="md"
                            src={profilePicture}/>
                        <Link to={`/profile/${_id}`}>
                        <Text ml={4} fontWeight="bold">{username}</Text>
                        </Link>
                    </Flex>
                </Box>
                <Spacer/>
                <Box p="4">
                    <Button onClick={followingUnfollowingHandler}>{btnText}</Button>
                </Box>
            </Flex>
        </VStack>
    )
}
