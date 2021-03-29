import React, {useState} from 'react';
import {Box, Image, Text, Fade, ScaleFade, Slide, SlideFade, useDisclosure,HStack, Button, Grid, GridItem, scaleFadeConfig } from "@chakra-ui/react";
import college from './images/gaara.jpg';
import { motion } from "framer-motion";
// import AboutItems from './subMenu/AboutItems';
import ProgramItems from './subMenu/ProgramItems';
import Test from './subMenu/test';
import AboutItems from './subMenu/AboutItems';
import FacultyItems from './subMenu/FacultyItems';
import ResearchItems from './subMenu/ResearchItems';
import CollaborationItems from './subMenu/CollaborationItems';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";

const Menu= () =>{
    const { isOpen, onToggle } = useDisclosure();
    const [home, setHome] = useState(false);
    const [about, setAbout]=useState(false);
    const [programmes, setProgrammes]=useState(false);
    const [faculty, setFaculty]=useState(false);
    const [research, setResearch]=useState(false);
    const [collaborations, setCollaborations]=useState(false);
    

    const closeAll = () =>{
        setHome(false);
        setAbout(false);
        setProgrammes(false);
        setFaculty(false);
        setResearch(false);
        setCollaborations(false);
        
    }

    return (
        
            <Box pt={10} pb={10}>
                {/* <Router> */}
                <Grid templateColumns="repeat(3, 1fr)" gap={6} h="600px">
                    <motion.div initial={{x: 500, opacity:0}}
                        animate={{ translateX: -500, opacity:1 }}
                        transition={{ duration: 1 }}>
                        <GridItem pl={4}>
                            <Link to="/"><Text mt={5} color="#fff" fontSize="48px" onClick={()=>{closeAll();
                                                                                        setHome(prev=>!prev)
                                                                                        }}>HOME</Text></Link>
                            <Text mt={5} color="#fff" fontSize="48px" onClick={()=>{closeAll();
                                                                                    setAbout(prev=>!prev)
                                                                                    }}>ABOUT</Text>
                            <Text mt={5} color="#fff" fontSize="48px" onClick={()=>{closeAll();
                                                                                    setProgrammes(prev=>!prev)
                                                                                    }}>PROGRAMMES</Text>
                            <Text mt={5} color="#fff" fontSize="48px" onClick={()=>{closeAll();
                                                                                    setFaculty(prev=>!prev)
                                                                                    }}>FACULTY</Text>
                            <Text mt={5} color="#fff" fontSize="48px" onClick={()=>{closeAll();
                                                                                    setResearch(prev=>!prev)
                                                                                    }}>RESEARCH</Text>
                            <Text mt={5} color="#fff" fontSize="48px" onClick={()=>{closeAll();
                                                                                    setCollaborations(prev=>!prev)
                                                                                    }}>COLLABORATIONS</Text>
                            <Link to="/contact">
                                <Text mt={5} color="#fff" fontSize="48px" onClick={()=>{closeAll()}}>CONTACT US</Text>
                            </Link>
                        {/* <AboutItems/> */}
                        {/* <ProgramItems/> */}
                        </GridItem>
                    </motion.div>
                
                <GridItem mt={7}>
                
                    <Text style={ about ? { display:'block'} : {display : 'none'} } ><AboutItems/></Text>
                    <Text style={ programmes ? { display:'block'}: {display : 'none'} } ><ProgramItems/></Text>
                    <Text style={ faculty ? { display:'block'} : {display : 'none'} } ><FacultyItems/></Text>
                    <Text style={ research ? { display:'block'} : {display : 'none'} } ><ResearchItems/></Text>
                    <Text style={ collaborations ? { display:'block'} : {display : 'none'} } ><CollaborationItems/></Text>
                    
                </GridItem>
                
                </Grid>
                {/* </Router> */}
            </Box>
            
        
    )
}

export default Menu;
// , transition:'all 10s', transform:'rotate(35deg)'
// <Text mt={5} color="#fff" fontSize="24px">FACULTY</Text>
//                 <Text mt={5} color="#fff" fontSize="24px">RESEARCH</Text>
//                 <Text mt={5} color="#fff" fontSize="24px">COLLABORATIONS</Text>
//                 <Text mt={5} color="#fff" fontSize="24px">CONTACT US</Text>
//                 <Button onClick={box}>Click for the box </Button>