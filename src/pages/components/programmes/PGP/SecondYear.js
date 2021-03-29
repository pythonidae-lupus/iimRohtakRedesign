import React from 'react';
import NavBox from './NavBox';
import {
    Grid,
    GridItem,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

const SecondYear = () => {
    return (
            <>
                <Table size="sm" color="#fff">
                    <Thead>
                        <Tr>
                        <Th>Convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </>  
           
    )
}

export default SecondYear;