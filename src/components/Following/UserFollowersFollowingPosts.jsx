import { useDisclosure } from '@chakra-ui/hooks'
import { Center ,Box} from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import Model from '../Model/Model'

export default function UserFollowersFollowingPosts({count,text,btnText}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <Center flexDirection="column" onClick={onOpen} cursor="pointer">
            <Box>
               {count}
            </Box>
             <Box >{text}</Box>
            <Model text={text} btnText={btnText} count={count} isOpen={isOpen} onClose={onClose}/>
        </Center >
    )
}
