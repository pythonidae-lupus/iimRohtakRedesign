import React, {useState} from 'react';
import { Box, List, ListItem, Grid, GridItem, Text } from '@chakra-ui/react';
import FirstYear from './FirstYear';
import SecondYear from './SecondYear';
import AboutPGP from './AboutPGP';
import Objectives from './Objecives';
import ContactPGP from './ContactPGP';
import Footer from '../../../Footer';
// import {motion} from 'framer-motion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";
import { motion } from 'framer-motion';

const NavBox = () => {
    const [about, setAbout] =useState(true);
    const [fy, setFy]=useState(false);
    const [sy, setSy]=useState(false);
    const [obj, setObj]=useState(false);
    const [calendar, setCalendar]=useState(false);
    const [contact, setContact]=useState(false);

    const closeAll = () =>{
        setAbout(false);
        setFy(false);
        setSy(false);
        setObj(false);
        setCalendar(false);
        setContact(false);
    }
    return (
        <Box>
        <Link to="/menu"><Text color="#fff" fontSize="24px" ml="1400px" alignItems='right'>MENU</Text></Link>
        <Grid h='700px' templateColumns='repeat(3,1fr)' gap={6} mt={20}>
            
            <GridItem ml={20} >
            <motion.div initial={{y: 100, opacity:0}}
                animate={{ translateY: -100, opacity:1 }}
                transition={{ duration: 1 }}>
                <Box border="2px" borderColor="#fff">
                    <List pl={5}>
                    <ListItem color="#fff" fontSize="24px" mt={5}onClick={()=>{closeAll();
                                                                            setAbout(prev=>!prev)
                                                                                        }}>
                            ABOUT
                        </ListItem>
                        <ListItem color="#fff" fontSize="24px" mt={5} onClick={()=>{closeAll();
                                                                            setFy(prev=>!prev)
                                                                                        }}>
                            FIRST YEAR
                        </ListItem>
                        
                        <ListItem color="#fff" fontSize="24px" mt={5} onClick={()=>{closeAll();
                                                                            setSy(prev=>!prev)}}>
                            SECOND YEAR
                        </ListItem>

                        <ListItem color="#fff" fontSize="24px" mt={5} onClick={()=>{closeAll();
                                                                            setObj(prev=>!prev)
                                                                                        }}>OBJECTIVES AND METHODOLOGY</ListItem>
                        <ListItem color="#fff" fontSize="24px" mt={5} onClick={()=>{closeAll();
                                                                            setSy(prev=>!prev)
                                                                                        }}>ACADEMIC CALENDAR</ListItem>
                        <ListItem color="#fff" fontSize="24px" mt={5} mb={5} onClick={()=>{closeAll();
                                                                            setContact(prev=>!prev)
                                                                                        }}>CONTACT US</ListItem>
                    </List>
                </Box>
                </motion.div>
            </GridItem>
            
            
            <GridItem colSpan={2} mr={20} ml={20} >
                <motion.div initial={{y: 100, opacity:0}}
                animate={{ translateY: -100, opacity:1 }}
                transition={{ duration: 1 }}>
                    <Box style={ about ? { display:'block'} : {display : 'none'} }>
                            <AboutPGP/>
                    </Box>
                    <Box style={ fy ? { display:'block'} : {display : 'none'} }>
                        
                            <FirstYear/>
                        
                    </Box>
                    <Box style={ sy ? { display:'block'} : {display : 'none'} }>
                        
                            <SecondYear/>
                        
                    </Box>
                    <Box style={ obj ? { display:'block'} : {display : 'none'} }>
                        
                            <Objectives/>
                        
                    </Box>
                    <Box style={ contact ? { display:'block'} : {display : 'none'} }>
                        
                            <ContactPGP/>
                        
                    </Box>
                </motion.div>
            </GridItem>
            
        </Grid>
        <Footer/>
        </Box>
    )
}

export default NavBox;
