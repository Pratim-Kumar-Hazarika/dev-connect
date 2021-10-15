import React from 'react'
import {Box, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Button,
    
    PopoverCloseButton,} from "@chakra-ui/react"

import Picker from 'emoji-picker-react';
import { FluentEmoji24Regular } from '../Screens/DisplayPostScreen';
export default function TestEmoji({onEmojiClick}) {
    return (
        <Box width={"4%"}>
            <Popover>
                <PopoverTrigger>
                    <Button size="" variant={"ghost"}><FluentEmoji24Regular/></Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverBody>
                        <Picker onEmojiClick={onEmojiClick}/></PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>

    )
}
