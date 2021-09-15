import {Center, Box} from '@chakra-ui/layout'
import React from 'react'

export default function PostsData({count, text, btnText}) {
    return (
        <Center flexDirection="column">
            <Box>
                {count}
            </Box>
            <Box>
                {text}</Box>
        </Center >
    )
}
