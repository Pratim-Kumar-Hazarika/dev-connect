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
import { useSelector } from 'react-redux'
export default function Model({text, btnText, count, isOpen, onClose}) {
    const [scrollBehavior,setScrollBehavior] = useState("inside")
    const {userFollowers} = useSelector(state => state.userFollowers)
    const {userfollowings} = useSelector(state => state.userFollowings)
   
    function userFollowingModel(userfollowings, btnText) {
        return userfollowings.map(({ _id, username, profilePicture }) => (
            <FollowerFollowingModel from={"following"} btnText={btnText} username={username} _id={_id} profilePicture={profilePicture} />
        ))
    }
    
    function userFollowersModel(userFollowers, btnText) {
        return userFollowers.map(({ _id, username, profilePicture }) => (
            <FollowerFollowingModel from={"followers"} btnText={btnText} username={username} _id={_id} profilePicture={profilePicture} />
        ))
    }
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
                    {
                        text==="Followers" ? userFollowersModel(userFollowers, btnText) :userFollowingModel(userfollowings, btnText)
                    }
                   
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}


