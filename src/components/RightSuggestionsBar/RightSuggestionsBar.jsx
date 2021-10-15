import React from 'react'
import "./RightSuggestionsBar.css"
import {Box, Flex, Spacer, Text} from '@chakra-ui/layout'
import {Avatar, AvatarBadge, AvatarGroup} from "@chakra-ui/react"
export default function RightSuggestionsBar() {
    return (
        <Box className='' mt={6}>
            <Flex>
                <Text fontWeight={"bold"} color={"gray"}>Suggestions for you</Text>
                <Spacer/>
                <Text fontWeight={"600"}>See all</Text>
            </Flex>
            <Flex justifyContent={"space-between"} mt={4}>
                <Flex alignItems={"center"}>
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>
                    <Box>
                        <Text ml={3} fontWeight={"bold"}>Dan Abromic</Text>
                    </Box>
                </Flex>
                <Flex fontWeight={"bold"} alignItems={"center"} color={"#0095F6"}>
                    Follow</Flex>
            </Flex>
        </Box>
    )
}
