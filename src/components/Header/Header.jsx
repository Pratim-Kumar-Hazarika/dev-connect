import React from 'react'
import "./Header.css"
import {Flex, Heading, Button, HStack, Avatar,Box} from "@chakra-ui/react";
import {PopOver} from '../PopOver/PopOver';
import Wrapper from './Wrapper';
import { TeenyiconsHomeOutline } from '../PopOver/PopOverIconsSvg';
import { Input } from "@chakra-ui/react"
export default function Header() {
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
                        {/* <Button variant="ghost" size="md" fontSize="md" textColor="red.400">
                            Login
                        </Button> */}
                        <Input placeholder="Search" />
                        <Box className="home_icon" fontSize="1.4em" fontWeight="light"><TeenyiconsHomeOutline/></Box>
                        <PopOver/>
                    </HStack>
                </Flex>
            </Wrapper>
        </Flex>
    )
}
