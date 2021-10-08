import React from 'react'
import {Text, Center, Heading} from "@chakra-ui/react"
export default function UserName({username, gender}) {
    return (
        <Center mt={8} flexDirection="column">
            <Heading fontSize="xl">{username}</Heading>
            <Text mt={3}>{(gender === "male" && "he/him") || (gender === "Prefer not to say!" && "") || (gender === "female" && "she/her")}</Text>
        </Center>
    )
}
