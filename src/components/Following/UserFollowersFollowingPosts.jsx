import { useDisclosure } from '@chakra-ui/hooks'
import { Center ,Box} from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Model from '../Model/Model'

export default function UserFollowersFollowingPosts({text,btnText,_id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {userFollowers,allFollowers} = useSelector(state => state.userFollowers)
   
    ///improve naming convention
    const getFollowers = allFollowers.filter((item)=>item._id === String(_id))
   
    const {userfollowings,allFollowings} = useSelector(state => state.userFollowings)
    const getFollowings = allFollowings.filter((item)=>item._id === String(_id))
    ////////////
    console.log({allFollowers})
    console.log({getFollowings})
    console.log({allFollowings})
    return (
        <Center flexDirection="column" onClick={onOpen} cursor="pointer">
            <Box>
                {
                    _id ==="admin" ? 
                    (
                     text === "Followers" ?
                      userFollowers.length :userfollowings.length
                    )
                    :
                    ( text === "Followers" ? 
                        getFollowers[0]?.userDetails.length || 0 
                                            :
                        getFollowings[0]?.userDetails.length || 0
                    )
                }
              
            </Box>
             <Box >{text}</Box>
            <Model text={text} btnText={btnText}  isOpen={isOpen} onClose={onClose}/>
        </Center >
    )
}
