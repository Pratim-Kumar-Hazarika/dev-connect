import {Button, Text,Flex} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/hooks'
import {Center, Box} from '@chakra-ui/layout'
import React, {useEffect} from 'react'
import {ClarityHeartSolid} from '../FeedPosts/Icons/Icons'
import Model from '../Model/Model'

export default function PostLikesModel({ text, btnText,totalLikes,likedUsers}) {
    const {isOpen, onOpen, onClose} = useDisclosure()


    return (
        <Center flexDirection="column" onClick={onOpen} cursor="pointer">
            {/* <Button ml={"3px"}
                variant="ghost"
                size="xs"
                color="gray"
                fontWeight="medium"
                border="1px solid #F9FAFB">
                  <Text ml={2}>{totalLikes} Likes</Text>
            </Button> */}
            <Text ml={2} mt={1}>{totalLikes} likes</Text>
            <Model
            likedUsers={likedUsers}
                text={text}
                from={"post"}
                btnText={btnText}
                // count={count}
                isOpen={isOpen}
                onClose={onClose}/>
        </Center >
    )
}