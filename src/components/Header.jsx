import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerCloseButton,DrawerContent,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react"
import {BiMenuAltLeft} from "react-icons/bi"
import { Link } from 'react-router-dom';
// import { Button } from '@chakra-ui/react'

const Header = () => {
  const {isOpen,onOpen,onClose}=useDisclosure();

  return (
    <>
     
      < Button top={'4'}  zIndex={'overlay'} left={'4'} pos={'fixed'}  colorScheme={'purple'}  onClick={onOpen}>
        <BiMenuAltLeft/>
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay/>
        
        <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Video Hub</DrawerHeader>

        <DrawerBody>
          <VStack alignItems={'flex-start'} >
            <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to={'/'}>Home </Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to={'/videos'}>Videos </Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to={'/videos?category=free'}>free Videos </Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
              <Link to={'/upload'}>Upload Videos</Link>
            </Button>
          </VStack>

          <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'}
          justifyContent={'space-evenly'}>
          <Button onClick={onClose} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
            </Button>

            <Button onClick={onClose} variant={"outline"} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </HStack>
        </DrawerBody>
        </DrawerContent>
        </Drawer>      
    </>
  )
}

export default Header
