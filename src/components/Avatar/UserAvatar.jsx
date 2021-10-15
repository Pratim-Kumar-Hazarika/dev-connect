import React from 'react'
import {Avatar, Box, Input} from "@chakra-ui/react"
export default function UserAvatar({image}) {
    return (
        <Box>
            <Avatar cursor="pointer" size="md" src={image}/>
        </Box>

    )
}
