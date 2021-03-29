import React from "react";
import { Box,Text} from "@chakra-ui/react";
import {motion} from "framer-motion"

const FacultyItems = () =>{
    
    return (
        
        <motion.div 
                    initial={{x: -500, opacity:0}}
                    animate={{ translateX: 500, opacity:1 }}
                    transition={{ duration: 2 }}
                >
             
            <Box>
                <Text color="#fff" fontSize="28px">DIRECTOR</Text> 
                <Text color="#fff" fontSize="28px" mt={4}>DEAN (ACADEMIC)</Text>
                <Text color="#fff" fontSize="28px" mt={4}>DEAN (REE)</Text>
                <Text color="#fff" fontSize="28px" mt={4}>FACULTY BY NAME</Text>
                <Text color="#fff" fontSize="28px" mt={4}>FULL TIME FACULTY</Text>
                <Text color="#fff" fontSize="28px" mt={4}>VISITING FACULTY/LECTURER</Text>
                <Text color="#fff" fontSize="28px" mt={4}>ADJUNCT FACULTY</Text>
            </Box>
            
        </motion.div>   
         
        
    )
}

export default FacultyItems;