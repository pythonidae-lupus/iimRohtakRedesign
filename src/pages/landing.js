import React from 'react';
import { Box, Divider, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";
const Landing = () =>{
    return (
        

        <Box> 
            <Link to="/menu"><Text color="#fff" fontSize="24px" ml="1400px">MENU</Text></Link>
            <Box pt="15%" pb="110px">
            <motion.div 
                initial={{y: 100}}
                animate={{ translateY: -100 }}
                transition={{ duration: 1.5 }}>
                <Divider orientation='horizontal' pt="30px" ml="25%" w="50%" color="#fff" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 4}}>
                <Text mt={5} color="#fff" fontSize="36px">WELCOME TO</Text>
                <Text color="#fff" fontSize="144px">IIM ROHTAK</Text>
            </motion.div>
            <motion.div 
                initial={{y: -100}}
                animate={{ translateY: 100 }}
                transition={{ duration: 1.5 }}>
                <Divider orientation='horizontal' pt="6px" ml="25%" w="50%" color="#fff" />
            </motion.div>
            <motion.div initial={{y: -100, opacity:0}}
                animate={{ translateY: 100, opacity:1 }}
                transition={{ duration: 1.5 }}    >
            <Link to="/video">
                <Box mt="100px">
                    <FontAwesomeIcon icon={faChevronDown} color="#fff" />
                </Box>
            </Link>
            
            </motion.div>
        
            </Box>
        </Box>
            
    )
}

export default Landing;
