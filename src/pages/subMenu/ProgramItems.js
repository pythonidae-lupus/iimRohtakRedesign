import React from "react";
import {Box, useDisclosure, Text, HStack, SlideFade, Collapse, Grid, GridItem} from "@chakra-ui/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";

const ProgramItems = () =>{
    const { isOpen, onToggle } = useDisclosure()
    return (
        <div>
            <Link to="/pgp">
                <Text color="#fff" fontSize="28px">PGP</Text>   
            </Link>
            <Link to="/pgp">
                <Text color="#fff" fontSize="28px" mt={4}>DOCTORAL PROGRAMME (DPM)</Text>
            </Link> 
            <Link to="/pgp">
                <Text color="#fff" fontSize="28px" mt={4}>FIVE YEAR INTEGRATED PROGRAMME IN MANAGEMENT (IPM)</Text>
            </Link>
            <Link to="/pgp">
                <Text color="#fff" fontSize="28px" mt={4}>FELLOW PROGRAMME IN MANAGEMENT (PART TIME)</Text>
            </Link>
            <Link to="/pgp">
                <Text color="#fff" fontSize="28px" mt={4}>EXECUTIVE TRAINING (MDP)</Text>
            </Link>
            <Link to="/pgp">
                <Text color="#fff" fontSize="28px" mt={4}>EXECUTIVE POST GRADUATE DIPLOMA IN SPORTS MANAGEMENT (EPGDSM)</Text>
            </Link>
            <Link to="/pgp">
                <Text color="#fff" fontSize="28px" mt={4}>POST GRADUATE PROGRAMME IN MANAGEMENT FOR EXECUTIVES (EPGPx)</Text>
            </Link>
        </div>   
        
    )
}

export default ProgramItems;