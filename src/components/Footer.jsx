import { Box, Button, HStack, Heading, Input, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} color={'white'} p={"20"}>
        <Stack direction={["column","row"]}>
            <VStack alignItems={"stretch"} w={"full"} p={"4"} >
                <Heading size={"md"} textAlign={["center","left"]}>Subscribe us for more Details</Heading>
                <HStack py={"2"}>
                    <Input focusBorderColor='white' placeholder='Enter Email here...' borderRadius={"20px 0 0 20px"}/>
                    <Button p={"0"} borderRadius={"0 20px 20px 0"}
                         >
                        <AiOutlineSend size={"20"}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} 
            borderLeft={["none","1px solid white"]}
            borderRight={["none","1px solid white"]} >

                <Heading size={'md'}>Video Store</Heading>
                <Text> All rights reserved</Text>

            </VStack>
            <VStack w={'full'} p={["4","0"]}>
                <Heading size={"md"}>Social Media</Heading>
                <Button variant={"link"} colorScheme={"whiteAlpha"}>
                    <a target='blank' href="http://youtube.com">Youtube</a>
                </Button>
                <Button variant={"link"} colorScheme={"whiteAlpha"}>
                    <a target='blank' href="http://instagram.com">Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme={"whiteAlpha"}>
                    <a target='blank' href="http://github.com/abdulrehman8210345">Github</a>
                </Button>
            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer