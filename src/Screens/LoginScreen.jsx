import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import "../components/Login/Login.css"
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export default function LoginScreen() {
    return (
        <Box className="login">
        <Box className="login_text_img">
            <Box className="hero_image11">
               <Image className="img"  src="https://images.unsplash.com/photo-1572782992110-afab5a6ef870?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"/>
            </Box>
        </Box>
        <Box className="login_form login_form_style">
           <LoginForm/>
        </Box>
    </Box>
    )
}
