import {Button, Text,Flex} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/hooks'
import {Center, Box} from '@chakra-ui/layout'
import React, {useEffect} from 'react'
import {ClarityHeartSolid} from '../FeedPosts/Icons/Icons'
import Model from '../Model/Model'

export default function PostLikesModel({ text, btnText,totalLikes}) {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Center flexDirection="column" onClick={onOpen} cursor="pointer">
            <Button ml={"3px"}
                variant="ghost"
                size="xs"
                color="gray"
                fontWeight="medium"
                border="1px solid #F9FAFB">
                  <Text ml={2}>{totalLikes}</Text>
            </Button>
            <Model
                text={text}
                btnText={btnText}
                // count={count}
                isOpen={isOpen}
                onClose={onClose}/>
        </Center >
    )
}