import React, { useState } from 'react';
import {Box, Center, Image, Text} from '@chakra-ui/react';
import team from '../assets/team.jpg';
import Footer from './Footer';
import Testimonials from './Testimonials';
import {motion} from 'framer-motion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";

const Video = () => {
    const [url, setUrl] = useState("https://www.youtube.com/embed/MBdVXkSdhwU");

    const handleClick=()=>{
        setUrl("https://www.youtube.com/embed/7C2z4GqqS5E")
    }
    return (
        <>
        <Link to="/menu"><Text color="#fff" fontSize="24px" ml="1400px" alignItems='right'>MENU</Text></Link>
        <motion.div 
            initial={{y: 100, opacity:0}}
            animate={{ translateY: -100, opacity:1 }}
            transition={{ duration: 1.5 }}>

            <Testimonials/>
            <Center><Text fontSize="48px" color="#fff" mt={80}>A GLIMPSE OF IIM ROHTAK</Text></Center>
        </motion.div>
        
        <motion.div 
            initial={{y: 100, opacity:0}}
            animate={{ translateY: -100, opacity:1 }}
            transition={{ duration: 3 }}>
        <Box ml={40} mt={20}>
            <iframe width="901" 
            height="475" 
            
            src={url} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
                
            </iframe>
            <Box mt="3">
            <Image onClick={handleClick} src={team} alt="team" htmlWidth="214" htmlHeight="80" style={{display:"inline-block"}}></Image>

            <span style={{marginLeft:"15px"}}>
            <Image onClick={handleClick} src={team} alt="team" htmlWidth="214" htmlHeight="80" style={{display:"inline-block"}}></Image>

            </span>

            <span style={{marginLeft:"15px"}}>
            <Image onClick={handleClick} src={team} alt="team" htmlWidth="214" htmlHeight="80" style={{display:"inline-block"}}></Image>

            </span>

            <span style={{marginLeft:"15px"}}>
            <Image onClick={handleClick} src={team} alt="team" htmlWidth="214" htmlHeight="80" style={{display:"inline-block"}}></Image>

                
            
            </span>
            
            </Box>
        </Box>
        </motion.div>
        <Footer/>
        </>
    )
}

export default Video;
