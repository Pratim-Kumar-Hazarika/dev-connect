import {Avatar} from '@chakra-ui/avatar'
import {
    Box,
    Flex,
    Spacer,
    VStack,
    Text,
    Button
} from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
export default function FollowerFollowingModel({btnText}) {
    return (
        <VStack spacing={4} align="stretch">
            <Flex >
                <Box p="4">
                    <Flex alignItems="center">
                        <Avatar
                            size="md"
                            name="Ryan Florence"
                            src="https://static.highsnobiety.com/thumbor/vQLL2siTyzzbG_eq0wWUMFudvDs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2018/07/25125520/ronaldo-medical-stats-01.jpg"/>
                        <Link to={`/account/${562728}`}>
                        <Text ml={4} fontWeight="bold">Cristiano Ronaldo</Text>
                        </Link>
                    </Flex>
                </Box>
                <Spacer/>
                <Box p="4">
                    <Button>{btnText}</Button>
                </Box>
            </Flex>
        </VStack>
    )
}
