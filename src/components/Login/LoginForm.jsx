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
    InputGroup
  } from "@chakra-ui/react"
  import { Formik, Form, Field } from 'formik';
  import {Link,useNavigate} from 'react-router-dom'
  import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
  import "./Login.css"
  import {useDispatch,useSelector} from "react-redux"
import { userLogin } from '../../features/auth/authSlice';
export default function LoginForm() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const dispatch = useDispatch()
  const {status} = useSelector(state => state.authentication)
  const navigate = useNavigate()
  useEffect(() => {
  
      if(status === "fulfilled"){
        navigate("/signup")
      }
    
  }, [status])

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

      function loginHandler(){
        dispatch(userLogin({userEmail:email,userPassword:password}))
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
          Log <span className="blue_text">In</span>
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
                <Input {...field} id="name" placeholder="Enter Email" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="password" validate={validatePassword} >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                  
                <Input   {...field} id="password" placeholder="Enter Password" type="password" mt={5}/>
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
          onClick={loginHandler}
          >
            LogIn
          </Button>
        </Form>
      )}
    </Formik>
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
          Don't Have an account ?
          <Link to="/signup">
            <span className="signup"> Sign up</span>
          </Link>
        </Center>
      </Box>
        </>
    )
}
