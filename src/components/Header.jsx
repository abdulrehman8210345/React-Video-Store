import React from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import {Link} from "react-router-dom"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'

const Header = () => {
    const {isOpen,onOpen,onClose} =useDisclosure();
  return <>
  <Button zIndex={"overlay"} pos={"fixed"} top={"3"} left={"4"} colorScheme={"purple"} h={"10"} w={"10"} p={"0"} borderRadius={"5"} onClick={onOpen}>
    <BiMenuAltLeft size={"25"}/>
  </Button>
  <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} >
    <DrawerOverlay />
    <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Video Store</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={'flex-start'} >

            <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
            <Link to={"/"}>Home</Link>
            </Button>

            <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
            <Link to={"/videos"}>Videos</Link>
            </Button>

            <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
            <Link to={"/videos?category=free"}>Free Videos</Link>
            </Button>

            <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
            <Link to={"/upload"}>Upload Video</Link>
            </Button>

            </VStack>

            <HStack pos={"absolute"} bottom={"10"} left={"0"}
             w={"full"} justifyContent={"space-evenly"}>
                <Button onClick={onClose} colorScheme={"purple"}>
                    <Link to={"/login"}>Log in</Link>
                </Button>

                <Button onClick={onClose} colorScheme={"purple"} variant={'outline'}>
                    <Link to={"/signup"}>Sign Up</Link>
                </Button>
            </HStack>
        </DrawerBody>
    </DrawerContent>

  </Drawer>
  
  </>
}

export default Header