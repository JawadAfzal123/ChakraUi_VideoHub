import { Button, Container, Heading, Input, VStack,Link } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'6'}>
        <form>
            <VStack m={'auto'} my={'16'} alignItems={'stretch'} w={['full','96']}> 
                <Heading textAlign={'center'}>Welcome Back</Heading>
                <Input placeholder='Email' type={'email'} />
                <Input placeholder='Password' type={'password'}/>
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/forgetpassword'}>Forget Password    </Link>
                </Button>
                <Button type='' colorScheme={'purple'}> Login In</Button>
                
                
            </VStack>
        </form>
        
    </Container>
  )
}

export default Login
