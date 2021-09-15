import { Image } from '@chakra-ui/image'
import { Center } from '@chakra-ui/layout'
import React from 'react'

export default function ProfilePicture() {
    return (
        <Center mt={5}>
           <Image
                borderRadius="full"
                boxSize="150px"
                src="https://yt3.ggpht.com/ytc/AKedOLQSxDiJQQWOBVyKr57NA22jA2fLWINxBGHkvVn4SA=s900-c-k-c0x00ffffff-no-rj"
                alt="Segun Adebayo"
                />
           </Center>
    )
}
