import { Image ,Avatar} from '@chakra-ui/react'
import { Center } from '@chakra-ui/layout'
import React from 'react'

export default function ProfilePicture({imageSrc}) {
    return (
        <Center mt={5}>
                <Avatar size="2xl" name="" src={imageSrc}/>
           </Center>
    )
}
