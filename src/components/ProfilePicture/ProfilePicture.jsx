import { Image ,Avatar} from '@chakra-ui/react'
import { Center } from '@chakra-ui/layout'
import React from 'react'

export default function ProfilePicture({imageSrc}) {
    return (
        <Center mt={5}>
           {/* <Image
                borderRadius="full"
                boxSize="150px"
              
                src={imageSrc}
                alt="Segun Adebayo"
                /> */}
                <Avatar size="2xl" name="Segun Adebayo" src={imageSrc}/>
           </Center>
    )
}
