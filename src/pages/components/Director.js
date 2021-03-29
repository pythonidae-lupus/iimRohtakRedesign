import React from 'react';
import {Text, Box, Grid, GridItem, Image} from  "@chakra-ui/react";
import director from "../../assets/director.jpg";

const Director = () => {
    return (
        <Grid p={20} templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem colSpan={2} >
                <Text fontSize="48px" color="#fff">DIRECTOR'S MESSAGE</Text>
                <Text color="#fff" fontSize="24px" pt="10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Mattis nunc sed blandit libero volutpat sed cras. Dolor morbi non arcu risus quis varius quam quisque. Cras ornare arcu dui vivamus arcu felis bibendum ut. 
                    Dolor purus non enim praesent. Consectetur adipiscing elit ut aliquam purus. Aliquet porttitor lacus luctus accumsan. 
                    Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. 
                    Malesuada bibendum arcu vitae elementum curabitur vitae. Maecenas ultricies mi eget mauris pharetra et ultrices neque. 
                    Sit amet commodo nulla facilisi nullam vehicula ipsum. Adipiscing tristique risus nec feugiat in. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. 
                    Quam vulputate dignissim suspendisse in. Diam ut venenatis tellus in. Orci nulla pellentesque dignissim enim.

                    Massa placerat duis ultricies lacus sed turpis. 
                    Scelerisque eleifend donec pretium vulputate sapien. 
                    Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. 
                    Fringilla est ullamcorper eget nulla facilisi. Duis convallis convallis tellus id interdum. In nibh mauris cursus mattis molestie. 
                    Dictum non consectetur a erat nam. Urna neque viverra justo nec ultrices dui sapien eget. 
                    Nunc aliquet bibendum enim facilisis gravida neque convallis. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. 
                    Maecenas pharetra convallis posuere morbi leo urna molestie at. Elementum nisi quis eleifend quam. Eget mauris pharetra et ultrices neque. 
                    Et molestie ac feugiat sed. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. 
                    Mauris pharetra et ultrices neque ornare aenean euismod elementum. Felis bibendum ut tristique et egestas quis. 
                    Egestas diam in arcu cursus euismod. Aliquam etiam erat velit scelerisque in.</Text>
            </GridItem>
            <GridItem>
                <Image h="800px" pt="90px" src={director}></Image>
                <a style={{color:'#fff'}} href="https://unsplash.com/@yoitscalebb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Credit: Caleb Stokes</a> <span style={{color:'#fff'}}>on</span> <a style={{color:'#fff'}} href="/s/photos/portrait-red?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </GridItem>
        </Grid>
    )
}

export default Director;