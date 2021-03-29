import React from "react";
import {Box, useDisclosure, Text, HStack, SlideFade} from "@chakra-ui/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";

const AboutItems = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        
        <Box
        color="#fff"
        fontSize="20px"
        >
            {/* <SlideFade in={isOpen} offsetX="-50px"> */}
            <Link to="/about">
                <Text color="#fff" fontSize="28px">ABOUT IIMR</Text>
            </Link>
            <Link to="/about">
                <Text color="#fff" fontSize="28px" mt={4}>VISION</Text>    
            </Link>
            <Link to="/about">
                <Text color="#fff" fontSize="28px" mt={4}>MISSION</Text>
            </Link>
            <Text color="#fff" fontSize="28px" mt={4}>BOARD OF GOVERNORS</Text>
            
            <Link to="/about">
                <Text color="#fff" fontSize="28px" mt={4}>DIRECTOR'S MESSAGE</Text>
            </Link>
            <Text color="#fff" fontSize="28px" mt={4}>IIMR INITIATIVE</Text>
            
            <Text color="#fff" fontSize="28px" mt={4}>RANKING AND OUTREACH</Text>
            
            <Text color="#fff" fontSize="28px" mt={4}>LOGO</Text>
            
            <Text color="#fff" fontSize="28px" mt={4}>NIRF</Text>
            
            <Text color="#fff" fontSize="28px" mt={4}>MANDATORY DISCLOSURE</Text>
            <Link to="/about">
                <Text color="#fff" fontSize="28px" mt={4}>EVENTS</Text>
            </Link>
            {/* </SlideFade> */}
        </Box>
        
    )
}

export default AboutItems;