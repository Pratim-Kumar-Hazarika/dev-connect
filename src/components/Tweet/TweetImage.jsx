import React from 'react'
import {Image, Box, Button} from "@chakra-ui/react"
import "./Tweet"
import {Tooltip} from "@chakra-ui/react"
import { MakiCross } from './Icons/Icons'

export default function TweetImage({imageSrc,setImageSrc}) {
    return (
        <Box position="relative">
            <Box position="relative">
                <Image
                    className="tweet_box_img"
                src={imageSrc}/>
               <Tooltip label="Remove" aria-label="A tooltip">
                <Button
                    position="absolute"
                    top="0"
                    mt={2}
                    ml={2}
                    variant="ghost" 
                    size="xs"
                    color="gray"
                    borderRadius="50%"
                    _hover={{
                        backgroundColor:"none"
                    }}
                    fontWeight="medium"
                    onClick={()=>setImageSrc("")}
                    >
                  
                        <MakiCross
                            style={{
                            color: "white"
                        }}/>
                  
                </Button>
                </Tooltip>
            </Box>

        </Box>
    )
}
