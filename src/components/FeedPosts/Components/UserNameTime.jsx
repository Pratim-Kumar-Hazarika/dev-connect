import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex ,Text} from '@chakra-ui/react'
import React from 'react'

export default function UserNameTime() {
    return (
        <>
           <Box  ml={4}>
            <Flex>
                    <Box >
                        <Avatar
                            cursor="pointer"
                            size="md"
                            name="Ryan Florence"
                            src="https://static.highsnobiety.com/thumbor/vQLL2siTyzzbG_eq0wWUMFudvDs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2018/07/25125520/ronaldo-medical-stats-01.jpg"/>
                    </Box>
                    <Box ml={4}>
                        <Text fontSize="sm" fontWeight="medium">pratimm__</Text>
                        <Text fontSize="sm" fontWeight="medium" color="gray">11 minutes ago</Text>
                    </Box>
                </Flex>
            </Box>  
        </>
    )
}
