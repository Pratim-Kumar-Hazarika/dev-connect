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
export default function Model({text, btnText, _id, isOpen, onClose,likedUsers,from}) {
    const [scrollBehavior,setScrollBehavior] = useState("inside")
    const {userFollowers,allFollowers} = useSelector(state => state.userFollowers)
    const {userfollowings,allFollowings} = useSelector(state => state.userFollowings)
  
    const getFollowers = allFollowers.filter((item)=>item._id === String(_id))
    const getFollowings = allFollowings.filter((item)=>item._id === String(_id))

    function userFollowingModel(userfollowings, btnText) {
        if(from ==="post"){
            return likedUsers.map(({ _id, username, profilePicture }) => (
                <FollowerFollowingModel from={"following"} btnText={btnText} username={username} _id={_id} profilePicture={profilePicture} />
            ))
        }
        if(_id !== "admin"){
            return getFollowings[0]?.userDetails.map(({ _id, username, profilePicture }) => (
                <FollowerFollowingModel from={"following"} btnText={btnText} username={username} _id={_id} profilePicture={profilePicture} />
            ))
        }
        return userfollowings.map(({ _id, username, profilePicture }) => (
            <FollowerFollowingModel from={"following"} btnText={btnText} username={username} _id={_id} profilePicture={profilePicture} />
        ))
    }
    
    function userFollowersModel(userFollowers, btnText) {
        if(_id !== "admin"){
            return getFollowers[0]?.userDetails.map(({ _id, username, profilePicture }) => (
                <FollowerFollowingModel from={"followers"} btnText={btnText} username={username} _id={_id} profilePicture={profilePicture} />
            ))
        }
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


