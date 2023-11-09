import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container h={"100vh"} w={'Container.xl'} p={"16"}>
        <VStack h={"full"} justifyContent={"center"} 
        color={"purple.600"}>
            <AiOutlineCloudUpload size={"15vmax"}/>
            <form >
            <HStack>
                    <Input fontSize={["10px","16px"]} p={["2","1"]}
                     required cursor={"pointer"} type='file'></Input>
                    <Button colorScheme='purple' type='submit'>Upload</Button>
            </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload