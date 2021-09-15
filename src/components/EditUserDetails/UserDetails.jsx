import {Center, Flex, Stack, VStack} from '@chakra-ui/layout'
import React from 'react'
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

export default function UserDetails() {
    return (
        <Center mt={4} >
            <VStack spacing={4} align="stretch">
                <UserData labelName={"Name"} placeholder={"Name"}/>
                <UserData labelName={"Username"} placeholder={"Username"}/>
                <UserData labelName={"Website"} placeholder={"Website"}/>
                <UserBio labelName={"Bio"} placeholder={"Enter something about yourself"}/>
                <UserEmail labelName={"Email"} email={"hpro373@gmail.com"}/>

                <Box >
                        <Flex justifyContent="space-around">
                            <Box width="20%">
                                <FormLabel>Gender</FormLabel>
                            </Box>
                            <Box width="70%">
                                <RadioGroup >
                                    <Stack direction="row">
                                        <Radio value="1"><MdiGenderMale/></Radio>
                                        <Radio value="2"><MdiGenderFemale/></Radio>
                                        <Radio value="3">Prefer Not To Say</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>
                        </Flex>
                </Box>
                <Box >
                    <Button ml={"8.8em"} bg="#0095f6" color="white">Submit</Button>
                </Box>
            </VStack>
        </Center>
    )
}
