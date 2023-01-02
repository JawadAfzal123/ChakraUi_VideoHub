import React from 'react'
import {Box, Stack, VStack,Heading, Text,HStack,Input, Button} from '@chakra-ui/react'
import {AiOutlineSend,AiOutlineGoogle,AiOutlineYoutube,AiFillFacebook} from 'react-icons/ai'
function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading textAlign={'center'} size={'md'}>Subscribe for More Videos</Heading>
                <HStack py={2}>
                    <Input border={'none'} borderRadius='none' outline={'none'} focusBorderColor={'none'} type="email" placeholder='Enter Email here' />
                    <Button bgColor={'purple'} variant={'ghost'}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'}>
                <Heading>VIDEO HUB</Heading>
                <Text> All right are recived</Text>
            </VStack>
            <VStack w={'full'} >
                <Heading>Social Media</Heading>
                <a href="www.google.com"><AiOutlineGoogle/> </a>
                <a href="www.facebook.com"><AiFillFacebook/> </a>
                <a href="www.Youtube.com"><AiOutlineYoutube/> </a>
            
            </VStack>


        </Stack>

    </Box>

  )
}

export default Footer
