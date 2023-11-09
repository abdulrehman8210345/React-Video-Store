import { Button, Container, Heading, Input, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} p={"16"} h={"100vh"}>
        <form >

        <VStack w={["full","96"]} m={"auto"} spacing={"6"} alignItems={"stretch"} >
            <Heading  color={"purple.500"} textAlign={"center"}>LOG IN</Heading>
            <Input border={"1px solid purple"} required placeholder='Email' type='email' focusBorderColor='purple.600'/>
            <Input  border={"1px solid purple"}required placeholder='Password' type='password' focusBorderColor='purple.600'/>

            <Button variant={"link"} alignSelf={"end"}>
                <Link to={"/forgetpassword"}>Forget Password?</Link>
            </Button>
          <Button colorScheme='purple'>
            Log In
          </Button>
          <Text alignSelf={"end"}>
                New User?{' '}
                <Button variant={"link"} alignSelf={"end"}>
                <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </Text>   
        </VStack>
        </form>
    </Container>
  )
}

export default Login