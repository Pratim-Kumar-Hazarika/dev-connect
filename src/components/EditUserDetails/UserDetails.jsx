import {Center, Flex, Stack, VStack} from '@chakra-ui/layout'
import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
    Text
} from "@chakra-ui/react"
import {Radio, RadioGroup} from "@chakra-ui/react"
import UserData from './Components/UserData'
import UserEmail from './Components/UserEmail'
import UserBio from './Components/UserBio'
import {MdiGenderFemale, MdiGenderMale} from './Icons/Icons'
import axios from 'axios'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'

export default function UserDetails() {
    const {token} = useSelector(state => state.authentication)
    const userprofileDetails = useSelector(state=>state.profileSettings)
    const [name,setName] = useState(userprofileDetails.name)
    const [userName,setUserName] = useState(userprofileDetails.username)
    const [websiteUrl,setWebsiteUrl] = useState(userprofileDetails.website)
    const [bio,setBio] = useState(userprofileDetails.bio)
    const [gender,setGender] = useState(userprofileDetails.gender)
    const navigate = useNavigate()

    function nameHandler(e) {
        setName(e.target.value)
    }
    function userNameHandler(e) {
        setUserName(e.target.value)
    }
    function websiteUrlHandler(e) {
        setWebsiteUrl(e.target.value)
    }
    function bioHandler(e) {
        setBio(e.target.value)
        
    }
    console.log({gender})
const {profilePicture} = useSelector(state=>state.profileSettings)

    async function settingsSubmitButtonClickHandler() {
        console.log({gender})
        console.log({profilePicture})
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/details`, {
                "name": name,
                "username": userName,
                "profilePicture": profilePicture,
                "profileBio": bio,
                "gender": gender,
                "website": websiteUrl
            }, {
                headers: {
                    authorization: token
                }
            })
            if(response.status === 200){
                // show toast
                console.log("response is after updated",{response})
                navigate("/")
            }
            
        } catch (error) {
            console.log("user details not updated")
        }
    }

    return (
        <Center mt={4}>
            <VStack spacing={4} align="stretch">
                <UserData
                    labelName={"Name"}
                    placeholder={"Name"}
                    value={name}
                    inputHandler={nameHandler}/>
                <UserData
                    labelName={"Username"}
                    placeholder={"Username"}
                    value={userName}
                    inputHandler={userNameHandler}/>
                <UserData
                    labelName={"Website"}
                    placeholder={"Website"}
                    value={websiteUrl}
                    inputHandler={websiteUrlHandler}/>
                <UserBio
                    labelName={"Bio"}
                    placeholder={"Enter something about yourself"}
                    value={bio}
                    inputHandler={bioHandler}/>
                <UserEmail labelName={"Email"} email={userprofileDetails.email}/>

                <Box >
                    <Flex justifyContent="space-around">
                        <Box width="20%">
                            <FormLabel>Gender</FormLabel>
                        </Box>
                        <Box width="70%">
                            <RadioGroup onChange={setGender} value={gender}>
                                <Stack direction="row">
                                    <Radio value="male"><MdiGenderMale/></Radio>
                                    <Radio value="female"><MdiGenderFemale/></Radio>
                                    <Radio value="Prefer not to say!">Prefer Not To Say</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Flex>
                </Box>
                <Box >
                    <Button
                        onClick={settingsSubmitButtonClickHandler}
                        ml={"8.8em"}
                        bg="#0095f6"
                        color="white">Submit</Button>
                </Box>
            </VStack>
        </Center>
    )
}
