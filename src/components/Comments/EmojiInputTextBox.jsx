import React from 'react'
import {Input, Flex, Box} from "@chakra-ui/react"
import EmojiPicker from '../EmojiPicker/EmojiPicker'
import TestEmoji from '../TestEmoji'
export default function EmojiInputTextBox({initRef, replyTo, chosenEmoji, inputHandler, onEmojiClick}) {
    return (
        <Flex alignItems={"center"} width={"90%"}>
            <TestEmoji onEmojiClick={onEmojiClick}/>
            <Box width={"87%"} ml={2}>
                <Input
                    placeholder="Add a comment..."
                    border=""
                    ref={initRef}
                    value={`${replyTo.concat(chosenEmoji)}`}
                    onChange={(e) => inputHandler(e)}/></Box>
        </Flex>
    )
}
