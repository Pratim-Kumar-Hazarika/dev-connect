import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    Box,
    Center,
    Stack,
    Heading,
    InputRightElement,
    InputGroup,
    Text
  } from "@chakra-ui/react"
  import { Formik, Form, Field } from 'formik';
  import {Link,useNavigate} from 'react-router-dom'
  import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
  import "./Signup.css"
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../../features/auth/authSlice';
export default function SignupForm() {

  const [email,setEmail] = useState()
  const [userName,setUserName] = useState()
  const [password,setPassword] = useState()
  const [fullName,setFullName] = useState()
 const dispatch = useDispatch()
const {status} = useSelector(state => state.authentication)
const navigate  = useNavigate()
useEffect(()=>{
  if(status === "signup sucessfull"){
    navigate("/login")
  }
},[status])
    function validateEmail(value) {
        let error;
        if (!value) {
          error = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = "Invalid email address";
        }
        setEmail(value)
        return error;
      }

      function validatePassword(value) {
        let error;
        if (!value ) {
          error = "Password is required";
        }
        setPassword(value)
        return error;
      }

      function validateUserName(value) {
        let error;
        if (value === "") {
          error = "User name is required";
        } else if ( !/^[a-zA-Z]+(\s*\w*)*$/.test(value)){
          error = "Please enter a valid user name"
        }
      setUserName(value)
    
        return error;
      }
      
      function validateFullName(value) {
        let error;
        if (value === "") {
          error = "Full name is required";
        } else if ( !/^[a-zA-Z]+(\s*\w*)*$/.test(value)){
          error = "Please enter a valid name"
        }
      
       setFullName(value)
        return error;
      }
      function signupButtonHandler(){
        dispatch(userSignup({userEmail:email,userName:userName,userFullName:fullName,userPassword:password}))
      }
    return (
        <>
        <Box width="100%" m="auto">
      <Stack
        spacing={3}
        width="400px"
        m="auto"
        boxShadow="0 4px 12px 0 rgb(0 0 0 / 5%)"
        p={10}
        mt={10}
      >
   <Center>
          <Heading as="h2" size="xl">
            Sign <span className="blue_text">Up</span>
          </Heading>
        </Center>
        <Center>
          <Heading as="h4" size="md" color="gray">
            Sign up to connect with some of the coolest developers.
          </Heading>
        </Center>
<Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <Input {...field} id="name" placeholder="Email" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>


          <Field name="fullname" validate={validateFullName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.fullname && form.touched.fullname}>
                <Input {...field} id="fullname" placeholder="Full Name"  mt={5}/>
                <FormErrorMessage>{form.errors.fullname}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="username" validate={validateUserName} >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.username && form.touched.username}>
                <Input {...field} id="username" placeholder="UserName"  mt={5}/>
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password" validate={validatePassword} >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                  
                <Input   {...field} id="password" placeholder="Enter Password" mt={5}/>
                <InputRightElement width="4.5rem" mt={6}>
            <Button h="1.75rem" size="sm" >
               <ViewIcon />
            </Button>
          </InputRightElement>
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
            bgColor="#0095F6"
          variant="solid"
          color="#ffffff"
          width="100%"
          onClick={signupButtonHandler}
          >
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
    <Text fontSize="xs">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
        </Text>
      </Stack>
      </Box>
           
    <Box
        width="400px"
        m="auto"
        mt={10}
        boxShadow="0 4px 12px 0 rgb(0 0 0 / 5%)"
        p={6}
      >
        <Center color="black">
          Have an account ?
          <Link to="/login">
            <span className="signup"> Log In</span>
          </Link>
        </Center>
      </Box>
        </>
    )
}
