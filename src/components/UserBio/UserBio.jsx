import {Center, Text} from '@chakra-ui/layout'
import React from 'react'

export default function UserBio({userbio}) {
    return (
        <Center mt={9}>
            <Text fontSize="lg">{userbio}
            </Text>
        </Center>
    )
}
