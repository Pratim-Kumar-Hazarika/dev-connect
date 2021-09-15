import { Box } from '@chakra-ui/layout'
import React from 'react'
import ChangeProfilePic from '../components/ChangeProfilePicture/ChangeProfilePic'
import UserDetails from '../components/EditUserDetails/UserDetails'
import Header from '../components/Header/Header'

export default function SettingsScreen() {
    return (
        <Box>
            <Header/>
            <ChangeProfilePic/>
            <UserDetails/>
        </Box>
    )
}
