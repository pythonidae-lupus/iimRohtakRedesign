import React from 'react';
import {HStack, Box, Text, GridItem, Image} from "@chakra-ui/react";
import events from "../../assets/events.jpg"

const Events = () =>{
    return (
        <Box p={20}>
        <Text fontSize="48px" color="#fff">EVENTS GALLERY</Text>
        <Box mt={10}>
            <HStack>
                <Image src={events} h="340px"></Image>
                <Image src={events} h="340px"></Image>
                <Image src={events} h="340px"></Image>
                <Image src={events} h="340px"></Image>
                <Image src={events} h="340px"></Image>
            </HStack>
            <span style={{color:'#fff'}}>Photo by</span> <a style={{color:'#fff'}} href="https://unsplash.com/@norrisniman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Norris Niman</a> <span style={{color:'#fff'}}>on</span> <a style={{color:'#fff'}} href="/s/photos/minimalist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
                </a>
        </Box>
        </Box>
    )
}

export default Events;
