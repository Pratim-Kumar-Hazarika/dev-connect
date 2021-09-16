import React, {useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Center,
    Box,
    VStack,
    Flex,
    Spacer,
    Avatar,
    Text
} from "@chakra-ui/react"
import FollowerFollowingModel from '../Followers/FollowerFollowingModel'
export default function Model({text, btnText, count, isOpen, onClose}) {
    const [scrollBehavior,setScrollBehavior] = useState("inside")
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            scrollBehavior={scrollBehavior}>
            <ModalOverlay/>
            <ModalContent maxH={"50vh"}>
                <Center>
                    <ModalHeader>{text}</ModalHeader>
                </Center>
                <hr/>
                <ModalCloseButton/>
                <ModalBody >
                    <FollowerFollowingModel btnText={btnText}/>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}
