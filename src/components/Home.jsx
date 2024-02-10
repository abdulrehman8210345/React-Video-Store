import { Box, Text, Container, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assests/1.jpg" ;
import image2 from "../assests/2.jpg" ;
import image3 from "../assests/3.jpg" ;
import image4 from "../assests/4.jpg" ;
import image5 from "../assests/5.png" ;

const Styling={

  pos:"absolute",
  top:"50%",
  left:"50%",
  size:"4xl",
  p:"4",
  textTransform:"uppercase",
  transform:"translate(-50%,-50%)",
  
}

const Home = () => {
 
  return <Box>
        <MyCarousel/>
        <Container maxW={"container.xl"} minH={"100vh"} p={"15"}>
            <Heading textTransform={"uppercase"} borderBottom={"2px solid"} w={'fit-content'} m={'auto'} >Services</Heading>
            <Stack h={'full'} alignItems={'center'}
             direction={["column","row"]} p={["4","0"]}   >
                <Image  h={["40","400"]}
                src={image5}/>
                <Text textAlign={'center'}  >
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima tempora corporis voluptates exercitationem quos natus, ipsum adipisci culpa libero excepturi inventore nulla et maiores ducimus nostrum asperiores! Dolore, totam!
                   Facilis hic est dignissimos sapiente harum accusamus natus atque aliquam praesentium suscipit id amet minus temporibus, fugit ipsum dicta voluptate, illum qui. Praesentium magnam veritatis non ipsam architecto perspiciatis quasi?
                   Veritatis totam tempora illo, consequatur odio sequi mollitia. Accusantium, adipisci. Repellendus animi tempore libero deserunt vitae numquam dolores iure sint obcaecati earum doloribus consectetur illo, id porro? Explicabo, adipisci odio!
                </Text>
            </Stack>
        </Container>
    </Box>;
};

export default Home

const MyCarousel = () =>{
  return(

    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false}>
        <Box h={"100vh"} w={"100vw"} >
            <Image src={image1} h={"100%"} w={"100%"} />
            <Heading bgColor={["blackAlpha.500","blackAlpha.300"]} color={"black"}
            {...Styling}    >Watch the Future</Heading>
        </Box>
        <Box w={"100vw"} h={"100vh"}>
            <Image src={image2} h={"100%"} w={"100%"} objectFit={"cover"}/>
            <Heading bgColor={["blackAlpha.500","whiteAlpha.400"]} color={"black"}
            {...Styling}>Gaming is Future</Heading>
        </Box>
        <Box w={"100vw"} h={"100vh"}>
            <Image src={image3} h={"100%"} w={"100%"} objectFit={"cover"} />
            <Heading bgColor={["blackAlpha.500","whiteAlpha.400"]} color={"black"}
            {...Styling}>Gaming is Fun</Heading>
        </Box>
        <Box w={"100vw"} h={"100vh"}>
            <Image src={image4} h={"100%"} w={"100%"} objectFit={"cover"}/>
            <Heading bgColor={["blackAlpha.500","whiteAlpha.400"]} color={"black"}
            {...Styling}>Entertain the World</Heading>
        </Box>
    </Carousel>

)
};