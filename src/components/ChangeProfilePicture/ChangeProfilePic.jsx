import {Avatar} from '@chakra-ui/avatar'
import {Center, Flex, Box, Text} from '@chakra-ui/layout'
import React from 'react'

export default function ChangeProfilePic() {
    return (
        <Center mt={7}>
            <Box width="500px">
                <Flex justifyContent="space-around">
                    <Box width="20%">
                        <Avatar
                            cursor="pointer"
                            size="md"
                            name="Ryan Florence"
                            src="https://static.highsnobiety.com/thumbor/vQLL2siTyzzbG_eq0wWUMFudvDs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2018/07/25125520/ronaldo-medical-stats-01.jpg"/>
                    </Box>
                    <Box width="70%">
                        <Text fontSize="lg" fontWeight="medium">pratimm__</Text>
                        <Text fontSize="md" fontWeight="medium" color="#0095f6">Change Profile Photo</Text>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}
