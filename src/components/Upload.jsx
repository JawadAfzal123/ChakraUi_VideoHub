import { Container, HStack, Input, VStack,Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'}  h={'100vh'}>
        <VStack h={'full'}  justifyContent={'center'} >
            <AiOutlineCloudUpload  size={'10vmax'}/>
            <form>
            <HStack>
                    <Input required  type={'file'}/>
                    <Button colorScheme={'purple'} type={'submit'}>Upload</Button>
            </HStack>
            </form>
        </VStack>
      
    </Container>
  )
}

export default Upload
