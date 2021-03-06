import React from 'react'
import "./Header.css"
import {Flex, Heading, Button, HStack, Avatar,Box} from "@chakra-ui/react";
import {PopOver} from '../PopOver/PopOver';
import Wrapper from './Wrapper';
import { TeenyiconsHomeOutline } from '../PopOver/PopOverIconsSvg';
import { Input } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

export function ClarityHeartLine(props) {
    return (
      <svg width="1.4em" height="1.4em" viewBox="0 0 36 36" {...props}><path d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21zM10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29z" class="clr-i-outline clr-i-outline-path-1" fill="currentColor"></path></svg>
    )
  }
export default function Header() {
    const {profilePicture} = useSelector(state=>state.profileSettings)
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            position="sticky"
            top="0px"
            bgColor="white"
            zIndex="10"
            py={3}
            px={[8, 8, 0]}
            width="100%"
            borderBottom=" 1px solid #dbdbdb">
            <Wrapper>
                <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Heading fontFamily="Style Script" fontSize={[28, 33]}>devConnect</Heading>
                    <HStack spacing={["2", "4"]}>
                        <Input placeholder="Search" className="home_icon" />
                        <Link to="/">
                        <Box className="home_icon" fontSize="1.4em" fontWeight="light"><TeenyiconsHomeOutline/></Box>
                        </Link>
                        <Box className="home_icon" fontSize="1.4em" fontWeight="light"><ClarityHeartLine/></Box>
                        
                        <PopOver imgSrc={profilePicture}/>
                    </HStack>
                </Flex>
            </Wrapper>
        </Flex>
    )
}
