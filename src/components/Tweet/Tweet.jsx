import {Avatar} from '@chakra-ui/avatar'
import {
    Box,
    Center,
    Flex,
    Spacer,
    Text,
    Button,
    Image,
    FormLabel,
    Input
} from '@chakra-ui/react'
import React, { useState } from 'react'
import {Textarea} from "@chakra-ui/react"
import "./Tweet.css"
import {Tooltip} from "@chakra-ui/react"
import {MdiFileImageBox} from './Icons/Icons'

import TweetImage from './TweetImage'
import UplodImage from '../UplodImage'

export default function Tweet() {
    const [imageSrc,setImageSrc] = useState()

    function handeInputChange(e) {
        const file = e.target.files[0];
        previewFile(file);
    
    }

    function previewFile(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageSrc(reader.result)
        };

    }
    return (
        <Box
            className="tweet_box"
            mt={7}
            border="1px solid #dbdbdb"
            borderRadius="4px"
            p={2}>
            <Flex color="white">
                <Box w="100px">
                    <Avatar
        
                        mt={3}
                        ml={3}
                        cursor="pointer"
                        size="md"
                        name="Ryan Florence"
                        src="https://static.highsnobiety.com/thumbor/vQLL2siTyzzbG_eq0wWUMFudvDs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2018/07/25125520/ronaldo-medical-stats-01.jpg"/>
                </Box>
                <Box flex="1">
                    <Box>
                        <Textarea
                            mt={4}
                            placeholder="Share anything you want"
                            border="none"
                            color="black"/>
                            <TweetImage imageSrc={imageSrc} setImageSrc={setImageSrc}/>
                        {/* Display image */}
                    </Box>
                    <Flex mt={2} >
                        <UplodImage handeInputChange={handeInputChange}/>
                        <Box>
                            <Button
                                variant="ghost"
                                size="xs"
                                color="gray"
                                fontWeight="medium"
                                width={"200px"}
                                ml={4}
                                border="1px solid #dbdbdb">Post</Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}


