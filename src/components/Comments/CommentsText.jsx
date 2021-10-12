import React from 'react'
import {
    Avatar,
    Button,
    Input,
    Flex,
    Box,
    Text
} from "@chakra-ui/react"
export default function CommentsText({userName,comment}) {
    return (
        <Box ml={4}>

            <Box>
                <Text fontSize="sm" fontWeight="">
                    <span
                        style={{
                        fontWeight: "bold"
                    }}>{userName}</span>
                    <span
                        style={{
                        marginLeft: "10px"
                    }}>{comment}</span>
                </Text>
            </Box>
        </Box>

    )
}
