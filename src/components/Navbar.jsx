import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {IoSearchCircleOutline} from "react-icons/io5"
import icon from "../image/icon.jpg"
// import {BsSearch}from "react-icons/bs"


const Navbar = () => {
  return (
    <Box display={"flex"} justifyContent={"space-evenly"} padding="0.2rem"  >
      <Box>
    <Image src={icon} borderRadius="10px"/>
      </Box>
      <Box display={"flex"} gap="20px" fontSize={"sm"} mt="8px">
        <Text>All flight</Text>
        <Text>Schedule</Text>
        <Text>Passengers</Text>
        <Text>Your orders</Text>
      </Box>
      <Box display={"flex"} >
        <Text mt="7px" cursor={"pointer"}><IoSearchCircleOutline color='gray' size={"30px"}/></Text>
        <Button bg={"transparent"} colorScheme='transparent' color={"black"} fontSize={"sm"}>Sign in</Button>
        <Button colorScheme='orange' fontSize={"sm"}>Sign up</Button>
      </Box>
    </Box>
  )
}

export default Navbar;
