import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import videosrc from '../assets/videos.mp4'
import videosrc2 from '../assets/video2.mp4'
import videosrc3 from '../assets/videos.mp4'
import videosrc4 from '../assets/videos.mp4'


const Videos = () => {
    //api for videos
    const videoArr=[
        videosrc,
        videosrc2,
        videosrc3,
        videosrc4,

    ]
    const [videoSrc,setvideosrc]=useState(videoArr[0]);

    return (
        <div>
            <Stack direction={['column', 'row']} h={'100vh'}>
                <VStack w={'full'}>
                    <video controls controlsList='nodownloads' src={videoSrc} style={{ width: '100%' }}></video>
                    <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflow={'auto'}>
                        <Heading>Sample Videos</Heading>
                        <Text>Check my Chakra Ui Interface. This is just a demo.
                            Thank You
                        </Text>
                    </VStack>
                </VStack>


                <VStack w={['full', 'xl']} alignItems={'stretch'} overflow={'auto' }p={'8'}>
                    {videoArr.map((item,index)=>(
                    <Button colorScheme={'purple'} variant='ghost' onClick={()=>setvideosrc(item)}>Lecture {index+1}</Button>

                        ))}
                    
                </VStack>
            </Stack>
        </div>
    )
}

export default Videos
