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
import {useDispatch, useSelector} from "react-redux"
import { createPost, newPost } from '../../features/post/postSlice'
export default function Tweet() {

    const postState = useSelector(state => state.post)
    const allPOSTS = useSelector(state=>state)
    const {token} = useSelector(state=>state.authentication)
    // console.log("yoyo token from tweet.jsx",{token})
    const dispatch = useDispatch()
    const [imageSrc,setImageSrc] = useState()

    function handeInputChange(e) {
        // console.log("called from Tweet change")
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
    const {profilePicture,userId,username} = useSelector(state=>state.profileSettings)
    function createPostHandler(){
        if(inputCaption  ){
            dispatch(createPost({_id:String(Math.random()),caption:inputCaption,image:imageSrc,flag: imageSrc?"image-exists":'',userName:username,profilePic:profilePicture,userId:userId,likes:[],comments:[]}))
            setInputCaption(" ")
            setImageSrc("")
            dispatch(newPost({caption:inputCaption,imageSrc:imageSrc,token}))
        }return;
    }

    const [inputCaption,setInputCaption] = useState()
   
    return (
        <Box
        bgColor={"white"}
            className=""
            mt={2}
            border="1px solid #dbdbdb"
            borderRadius="4px"
            p={2}
            overflow="hidden"
            >
            <Flex color="white">
                <Box w="100px">
                    <Avatar
        
                        mt={3}
                        ml={3}
                        cursor="pointer"
                        size="md"
                        name=""
                        src={profilePicture}/>
                </Box>
                <Box flex="1">
                    <Box>
                        <Textarea
                            mt={4}
                            value={inputCaption}
                            onChange={(e)=>setInputCaption(e.target.value)}
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
                                onClick={createPostHandler}
                                variant="ghost"
                                size="xs"
                                color="gray"
                                fontWeight="medium"
                                width={"200px"}
                                ml={4}
                                disabled={inputCaption?false:true}
                                border="1px solid #dbdbdb">Post</Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}


