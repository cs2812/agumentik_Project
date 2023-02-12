import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdAirplane } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const SearchNav = () => {
  return (
    <Box
        display={"flex"}
        padding="0.4rem"
        justifyContent={"space-evenly"}
        bg="teal.50"
      >
        {/* first Box */}
        <Box display={"flex"} justifyContent={"space-evenly"} border="1px solid #d0d6db" borderRadius="10px">
          <Box p={"5px 40px 0px 40px"}>
            <Text fontSize={"x-small"} fontWeight={"600"} color="gray.400">
              Departure city
            </Text>
            <Text fontSize={"x-small"} fontWeight={"600"}>
              CITY NAME
            </Text>
          </Box>
          {/* Middle Crouse Button of Departure and Arival */}
          <Text cursor={"pointer"}  mt="10px">
            <RiArrowLeftRightFill color="gray" />
          </Text>
          <Box p={"5px 60px 0px 30px"}>
            <Text fontSize={"x-small"} fontWeight={"600"} color="gray.400">
              Arival city
            </Text>
            <Text fontSize={"x-small"} fontWeight={"600"}>
              CITY NAME
            </Text>
          </Box>
        </Box>

        {/* Departure Date/ passanger / business class */}
        <Box display={"flex"} gap="10px" p={"10px 60px 10px 20px"} ml="80px">
          <Box display={"flex"} gap="5px">
            <IoCalendarOutline color="blue" />
            <Text fontSize={"small"} fontWeight={"600"}>
              {" "}
              29 FEB-one way
            </Text>
          </Box>
          <Box borderLeft={"2px solid gray"} h="50%"></Box>
          <Box display={"flex"} gap="5px">
            <CgProfile color="blue" />
            <Text fontSize={"small"} fontWeight={"600"}>
              5 Passanger
            </Text>
          </Box>
          <Box borderLeft={"2px solid gray"} h="50%"></Box>
          <Box display={"flex"} gap="5px">
            <IoMdAirplane color="blue" />
            <Text fontSize={"small"} fontWeight={"600"}>
              Business class
            </Text>
          </Box>

          {/* Change Search */}
          <Button
            rightIcon={<IoIosArrowDown />}
            colorScheme="white"
            color={"blue"}
            variant="outline"
            mt="-10px"
          >
            Change Search
          </Button>
        </Box>
      </Box>
  )
}

export default SearchNav
