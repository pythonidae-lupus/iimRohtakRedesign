import React from 'react';
import { Box, Image, Flex, HStack, Grid, GridItem, List, ListItem } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <>
            
            <Grid templateRows='repeat(2,1fr)' templateColumns='repeat(2,1fr)' bg="green" pb={20} mt='80px' pr={20}>
                <GridItem rowSpan={2} columnSpan={1}>
                    <Image htmlHeight="700px" htmlWidth="700px" src={logo} alt="logo"/>
                </GridItem>
                <GridItem mt = {20} columnSpan={1} rowSpan={1}>
                    <Flex>
                        <List ml={40}>
                            <ListItem color="#fff">Jobs</ListItem>
                            <ListItem color="#fff">Tender</ListItem>
                            <ListItem color="#fff">Admission Policy</ListItem>
                            <ListItem color="#fff">Events</ListItem>
                        </List>
                        <List ml={40}>
                            <ListItem color="#fff">Privacy Policy</ListItem>
                            <ListItem color="#fff">Media Room</ListItem>
                            <ListItem color="#fff">KRC</ListItem>
                            
                        </List>
                        <List ml={40}>
                            <ListItem color="#fff">Annual Reports</ListItem>
                            <ListItem color="#fff">ITRC</ListItem>
                            <ListItem color="#fff">Placement</ListItem>
                            <ListItem color="#fff">RTI</ListItem>
                        </List>
                    </Flex>
                </GridItem>
                <GridItem columnSpan={1} rowSpan={1}>
                    <Flex>
                        <List ml={40}>
                            <ListItem color="#fff">Jobs</ListItem>
                            <ListItem color="#fff">Tender</ListItem>
                            <ListItem color="#fff">Admission Policy</ListItem>
                            <ListItem color="#fff">Events</ListItem>
                        </List>
                        <List ml={40}>
                            <ListItem color="#fff">Privacy Policy</ListItem>
                            <ListItem color="#fff">Media Room</ListItem>
                            <ListItem color="#fff">KRC</ListItem>
                            
                        </List>
                        <List ml={40}>
                            <ListItem color="#fff">Annual Reports</ListItem>
                            <ListItem color="#fff">ITRC</ListItem>
                            <ListItem color="#fff">Placement</ListItem>
                            <ListItem color="#fff">RTI</ListItem>
                        </List>
                    </Flex>
                </GridItem>
            </Grid>
        </>
    )
}

export default Footer;
