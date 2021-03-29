import React from 'react';
import Footer from './Footer';
import { Text, Box, Grid, GridItem, Input, InputGroup, HStack, VStack, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect    
  } from "react-router-dom";
const Contact = () => {
    return (
        <>
        <Link to="/menu"><Text color="#fff" fontSize="24px" ml="1700px" alignItems='right'>MENU</Text></Link>
        <motion.div 
            initial={{y: 100, opacity:0}}
            animate={{ translateY: -100, opacity:1 }}
            transition={{ duration: 1 }}
        >   
        <Box ml={40} mt="40px">
            <Text color="#fff" fontSize="48px">CONTACT US</Text>
            <Text color="#fff" fontSize="36px">REACH OUT TO US ON</Text>
            </Box>
            <Grid templateColumns='repeat(2,1fr)' gap={6}>
                
                <GridItem colSpan={1} mt={20} pl={40} >
                    <HStack>
                        <Input borderRadius='3px' placeholder="First Name" bg="#fff"/>
                        <Input borderRadius='3px' placeholder="Last Name"  bg="#fff"/>
                    </HStack>
                    <Input mt={10} borderRadius='3px' placeholder="Email"  bg="#fff"/>
                    <textArea style={{resize:'none', marginTop:'60px', borderRadius:'3px', width:'800px', height:'300px'}} placeholder="Query"/>
                </GridItem>

                <GridItem colSpan={1} pl={40} mt={20}>
                    
                        <HStack>
                        <Box >
                            <Text color="#fff" fontSize="24px">abs123@def.ghi</Text>
                            <Text color="#fff" fontSize="24px">abs123@def.ghi</Text>
                            <Text color="#fff" fontSize="24px">abs123@def.ghi</Text>
                            <Text color="#fff" fontSize="24px">abs123@def.ghi</Text>
                            <Text color="#fff" fontSize="24px">abs123@def.ghi</Text>
                            
                        </Box>
                        <Box pl={20}>
                            <Text color="#fff" fontSize="24px">98xxxxxxxx</Text>
                            <Text color="#fff" fontSize="24px">98xxxxxxxx</Text>
                            <Text color="#fff" fontSize="24px">98xxxxxxxx</Text>
                            <Text color="#fff" fontSize="24px">98xxxxxxxx</Text>
                            <Text color="#fff" fontSize="24px">98xxxxxxxx</Text>
                            
                        </Box>
                        </HStack>
                        <Button borderRadius='3px' mt='240px'  h='60px' w='400px'color='#fff' variant="outline" 
                        _hover={{
                            color:"#f23e3e",
                            background:"#fff",
                            
                        }}>
                            SUBMIT
                        </Button>
                </GridItem>
            </Grid>
        </motion.div>
        <Footer/>
        </>
    )
}

export default Contact;