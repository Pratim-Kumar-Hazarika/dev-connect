import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex ,Text} from '@chakra-ui/react'
import React from 'react'

export default function UserNameTime({userImage,userName}) {
    return (
        <>
           <Box  ml={4}>
            <Flex>
                    <Box >
                        <Avatar
                            cursor="pointer"
                            size="md"
                            src={userImage}/>
                    </Box>
                    <Box ml={4}>
                        <Text fontSize="sm" fontWeight="medium">{userName}</Text>
                        {/* Time also needs to be updated */}
                        <Text fontSize="sm" fontWeight="medium" color="gray">11 minutes ago</Text>
                    </Box>
                </Flex>
            </Box>  
        </>
    )
}
