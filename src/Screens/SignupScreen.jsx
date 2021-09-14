import React from 'react'
import "../components/Login/Login.css"
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import SignupForm from '../components/Signup/SignupForm'

export default function SignupScreen() {
    return (
        <Box className="login">
        <Box className="login_text_img">
            <Box className="hero_image11">
               <Image className="img" src="https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
            </Box>
        </Box>
        <Box className="login_form login_form_style">
           <SignupForm/>
        </Box>
    </Box>
    )
}
