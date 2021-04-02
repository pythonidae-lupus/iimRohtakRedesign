import React from 'react';
import { Image, Box, Text, Center, Divider } from '@chakra-ui/react';
import alumni from '../assets/directorsq.jpg';
import review from '../assets/review.svg'
const Testimonials = () => {
    return (
        <Box ml={40} mr={40} mt={10} >
            <Center fontSize='48px' color='#fff'>TESTIMONIALS</Center>
            <Center>
            <Image src={alumni} alt={alumni} mt={10} borderRadius="full" boxSize='200px'/>
            </Center>
            <Center>
                <Divider orientation='horizontal' color='#fff' mt={20} w='800px'></Divider></Center>
            <Text color="#fff" fontSize="18px" mt={20}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Faucibus nisl tincidunt eget nullam non nisi. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. 
                Cras sed felis eget velit aliquet sagittis id. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. 
                Neque aliquam vestibulum morbi blandit cursus risus at. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. 
                Id consectetur purus ut faucibus pulvinar. Sed arcu non odio euismod lacinia at. Mattis vulputate enim nulla aliquet. 
                Est ultricies integer quis auctor. Gravida cum sociis natoque penatibus. Et ligula ullamcorper malesuada proin. 
                Aliquam ut porttitor leo a diam sollicitudin tempor. Lectus urna duis convallis convallis tellus id interdum velit laoree.
            </Text>
        </Box>
    )
}

export default Testimonials;
