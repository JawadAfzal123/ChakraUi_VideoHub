import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img2.jpg'
import img2 from '../assets/img3.jpg'
import img3 from '../assets/img4.jpg'
import img4 from '../assets/img1.jpg'
// import Container from 'react'
import {  Heading,Container, Stack ,Text,Image} from "@chakra-ui/react";

const Home = () => {
    return (
        <>
                <Carousel showArrows={false} autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false}>
                    <div>
                        <img src={img1} alt='pic' />
                        <p className="legend">Leeegend 1</p>
                    </div>
                    <div>
                        <img src={img2} alt='pic' />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={img3}
                            alt='pic' />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={img4} alt='pic' />
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
           <Container maxW={'container.xl'} minH={'100vh' } p='16'> 
           <Heading textTransform={'uppercase'} py='2 ' borderBottom={'2px solid'} w={'fit-content'} m="auto">Services</Heading>
            
            <Stack h={'full'} p={4} alignItems={'center'} direction={['column','row']} textAlign={'center'}>
                <Image width={400} h={['40','400']} src="https://w0.peakpx.com/wallpaper/700/165/HD-wallpaper-popeye-fantasy-sailor-luminos-cg-tattoo-man.jpg" alt="" />
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas pariatur dicta ea voluptate, 
                    labore temporibus explicabo iure? Illum aliquam excepturi nemo, numquam pariatur quis ducimus placeat qui provident explicabo
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque voluptatum eaque minima quidem vero autem amet voluptate dolore
                    ? Laborum ipsum similique molestias voluptates? Sit dicta quasi impedit dignissimos accusantium. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Sequi reprehenderit deleniti rem quo fuga doloribus ea earum aut dolorem, 
                    numquam nemo maxime iste ratione expedita praesentium at. A, dicta distinctio. .</Text>
            </Stack>
           </Container>



        </>
    );
};

export default Home
