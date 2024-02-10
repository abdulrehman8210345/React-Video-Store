import { Heading, Stack, VStack,Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
  const videoSrcs=['https://cdn.pixabay.com/vimeo/880737125/jog-187612.mp4?width=960&hash=311ba9778f73dc243572f977cc6a7e0c73907868','https://cdn.pixabay.com/vimeo/140823862/library-846.mp4?width=640&hash=c9ef9b4f074e8569c96532bf429ed39219cb7db7','https://cdn.pixabay.com/vimeo/362518559/coffee-27230.mp4?width=640&hash=c5b6c2d779b4e6a3c1ed5aca1556adb9b6769fa4','https://media.istockphoto.com/id/523194372/video/turning-pages-english-book.mp4?s=mp4-640x640-is&k=20&c=C6dgwd3rvbu2IMZw9dnTshc-AuvLs4yZykci57VWPAs=','https://cdn.pixabay.com/vimeo/181538531/book-4952.mp4?width=640&hash=d18a1f9930e6f0e6ac5024e6fa137a1c7457059f','https://v1.cdnpk.net/videvo_files/video/premium/video0024/small_watermarked/356_356-0345_preview.webm','https://v1.cdnpk.net/videvo_files/video/premium/video0024/small_watermarked/356_356-0400_preview.webm','https://v1.cdnpk.net/videvo_files/video/premium/video0024/small_watermarked/356_356-0355_preview.webm','https://v3.cdnpk.net/videvo_files/video/premium/partners0044/small_watermarked/BB_8de51e16-2634-40b9-8da9-76e28922b01c_preview.mp4','https://v3.cdnpk.net/videvo_files/video/premium/partners0044/small_watermarked/BB_8de51e16-2634-40b9-8da9-76e28922b01c_preview.mp4','https://v3.cdnpk.net/videvo_files/video/premium/partners0044/small_watermarked/BB_8de51e16-2634-40b9-8da9-76e28922b01c_preview.mp4']

  const [videoLinks,setVideoLinks]=useState(videoSrcs[0]);
  const [videoNum,setVideoNum]=useState("1");

  return (
    <Stack direction={["column","row"]} h={"100vh"}>
        <VStack w={"full"} maxHeight={"80vh"}>
        <video controls controlsList='nodownload' 
        src={videoLinks} 
        style={{
          width:'100%',
          maxHeight:'100%',
          
        }}></video>
        <VStack alignItems={"flex-start"} w={"full"} p={"6"} maxHeight={"20vh"}>
        <Heading>Sample Video {videoNum}</Heading>
        <Text>
          This is a sample video for developing skills

        </Text>
        </VStack>
        </VStack>
        <VStack w={["full","xl"]}  alignItems={"stretch"} p={"3"} overflowY={"auto"} >
          {
            videoSrcs.map((ele,index)=>{
              return(

                <Button variant={"ghost"} colorScheme='purple'
                onClick={()=>{
                  setVideoLinks(ele);
                  setVideoNum(index+1)
                  }} >
              Video {index+1}
            </Button>
                )
            })
          }

        </VStack>
    </Stack>
  )
}

export default Videos