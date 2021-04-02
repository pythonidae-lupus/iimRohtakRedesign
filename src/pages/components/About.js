import React from 'react';
import {Box, Grid, GridItem, List, ListItem, Heading, Text} from '@chakra-ui/react';
import {motion} from "framer-motion";
import Director from './Director.js';
import Events from './Events.js';
import Footer from '../Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";

const About = () => {
    return (
        <>
        <Link to="/menu"><Text color="#fff" fontSize="24px" ml="1300px" alignItems='right'>MENU</Text></Link>
        <motion.div initial={{y: 100, opacity:0}}
        animate={{ translateY: -100,opacity:1 }}
        transition={{ duration: 1 }}>
        <Grid templateRows="repeat(2, 1fr)" gap={6} p={20} pt={10} pb={0} h="830px">
        
        <GridItem color="#fff" fontSize="24px">
            <Text fontSize="48px">ABOUT</Text>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
             Aldus PageMaker including versions of Lorem Ipsum.
             </p>
             <br></br>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
             Aldus PageMaker including versions of Lorem Ipsum.
             </p>
        </GridItem>
        <GridItem>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
                    <Box color="#fff" >
                        <Text fontSize="48px">VISION</Text>
                        <Text fontSize="24px">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </Box>
                </GridItem>
                <GridItem >
                    <Box color="#fff" >
                        <Text fontSize="48px">MISSION</Text>
                        <Text fontSize="24px">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </Box>
                </GridItem>
            </Grid>
        </GridItem>
    </Grid>
    <Director/>
    <Events/>
    </motion.div>
    <Footer/>
    </>
    )
}

export default About;
