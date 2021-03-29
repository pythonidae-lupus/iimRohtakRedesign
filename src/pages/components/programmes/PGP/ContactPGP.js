import React from 'react';
import { Text, Box, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const ContactPGP = () => {
    return (
        <motion.div 
            initial={{y: 100}}
            animate={{ translateY: -100 }}
            transition={{ duration: 1.5 }}
        >
            <Box ml={10}>
                <Text color="#fff" fontSize="48px">CONTACT US</Text>
                <Text color="#fff" fontSize="36px">REACH OUT TO US ON</Text>
                <Grid templateColumns='repeat(2,1fr)' gap={6} mt={20}>
                    <GridItem pl={20} colSpan={1}>
                        <Text color="#fff" fontSize="24px">abs123@def.ghi</Text>
                        <Text color="#fff" fontSize="24px">abs123@def.ghi</Text>
                    
                    </GridItem>
                    <GridItem colSpan={1} pl={20}>
                        <Text color="#fff" fontSize="24px">98xxxxxxxx</Text>
                        <Text color="#fff" fontSize="24px">98xxxxxxxx</Text>
                    </GridItem>
                </Grid>
            </Box>
        </motion.div>
    )
}

export default ContactPGP;