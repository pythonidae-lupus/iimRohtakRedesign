import React from 'react';
import NavBox from './NavBox';
import {
    Grid,
    GridItem,
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

const FirstYear = () => {
    return (
            <>
            <Text fontSize='48px' color='#fff'>SYLLABUS</Text>
                <Table size="sm" color="#fff" mt={20}>
                    <Thead>
                        <Tr>
                        <Th fontSize="18px" color="#fff" isNumeric>NO.</Th>
                        <Th fontSize="18px" color="#fff">SUBJECTS</Th>
                        <Th fontSize="18px" color="#fff" isNumeric>CREDITS</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Td fontSize="18px">1</Td>
                        <Td fontSize="18px">MICROECONOMICS</Td>
                        <Td fontSize="18px" isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">2</Td>
                        <Td fontSize="18px">ANALYSIS</Td>
                        <Td isNumeric fontSize="18px">30.48</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">3</Td>
                        <Td fontSize="18px">MATHS</Td>
                        <Td isNumeric fontSize="18px">0.91444</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">4</Td>
                        <Td fontSize="18px">MICROECONOMICS</Td>
                        <Td fontSize="18px" isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">5</Td>
                        <Td fontSize="18px">ANALYSIS</Td>
                        <Td isNumeric fontSize="18px">30.48</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">6</Td>
                        <Td fontSize="18px">MATHS</Td>
                        <Td isNumeric fontSize="18px">0.91444</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">7</Td>
                        <Td fontSize="18px">MICROECONOMICS</Td>
                        <Td fontSize="18px" isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">8</Td>
                        <Td fontSize="18px">ANALYSIS</Td>
                        <Td isNumeric fontSize="18px">30.48</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">9</Td>
                        <Td fontSize="18px">MATHS</Td>
                        <Td isNumeric fontSize="18px">0.91444</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">10</Td>
                        <Td fontSize="18px">MICROECONOMICS</Td>
                        <Td fontSize="18px" isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">11</Td>
                        <Td fontSize="18px">ANALYSIS</Td>
                        <Td isNumeric fontSize="18px">30.48</Td>
                        </Tr>
                        <Tr>
                        <Td fontSize="18px">12</Td>
                        <Td fontSize="18px">MATHS</Td>
                        <Td isNumeric fontSize="18px">0.91444</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </>  
           
    )
}

export default FirstYear;