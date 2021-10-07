import { useDisclosure } from '@chakra-ui/hooks'
import { Center ,Box} from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Model from '../Model/Model'

export default function UserFollowersFollowingPosts({text,btnText}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {userFollowers} = useSelector(state => state.userFollowers)
    const {userfollowings} = useSelector(state => state.userFollowings)
    return (
        <Center flexDirection="column" onClick={onOpen} cursor="pointer">
            <Box>
                {
                    text === "Followers" ? userFollowers.length :userfollowings.length
                }
            </Box>
             <Box >{text}</Box>
            <Model text={text} btnText={btnText}  isOpen={isOpen} onClose={onClose}/>
        </Center >
    )
}
