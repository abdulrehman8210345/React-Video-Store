import { Button, Container, Heading, Input, VStack ,Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} p={"16"} h={"100vh"}>
        <form >

        <VStack w={["full","96"]} m={"auto"} spacing={"6"} alignItems={"stretch"} >
            <Heading  color={"purple.500"} textAlign={"center"}>Video Store</Heading>
            <Avatar alignSelf={"center"} size={"xl"}/>
            <Input border={"1px solid purple"} required placeholder='Name' type='text' focusBorderColor='purple.600'/>
            <Input border={"1px solid purple"} required placeholder='Phone' type='number' focusBorderColor='purple.600'/>
            <Input border={"1px solid purple"} required placeholder='Email' type='email' focusBorderColor='purple.600'/>
            <Input  border={"1px solid purple"}required placeholder='Password' type='password' focusBorderColor='purple.600'/>

          <Button colorScheme='purple'>
            Sign Up
          </Button>
          <Text alignSelf={"end"}>
                Already have an account?{' '}
                <Button variant={"link"} alignSelf={"end"}>
                <Link to={"/login"}>Log In</Link>
            </Button>
          </Text>   
        </VStack>
        </form>
    </Container>
  )
}

export default Signup