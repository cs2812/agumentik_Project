import React from 'react'
import { Box, Button, Image, Text } from "@chakra-ui/react";


const SearchResult = () => {
  return (
    <Box
          width={"60%"}
          border="solid"
          display={"flex"}
          justifyContent={"space-evenly"}
          gap="40px"
          bg="white"
          margin={"auto"}
          borderRadius={"10px"}
          p={"10px 10px"}
        >
          <Box p="5px 15px">
            <Image
              width={"75px"}
              height="75px"
              src="https://img.freepik.com/free-vector/airlines-company-logo-template_1043-164.jpg"
            />
            <Text>AirLine.co</Text>
          </Box>
          <Box borderLeft={"2px solid #f2f2f2"}></Box>
          <Box>
            <Box display={"flex"} gap="30px">
              <Box>
                <Text fontSize={"x-small"}>Friday</Text>
                <Text fontSize={"lg"} color="black" fontWeight={"600"}>
                  07:40 <Text as="span" color={"gray"}>AM</Text>
                </Text>
                <Text fontSize={"x-small"}>DXB</Text>
              </Box>
              <Box mt="10px">
                <Text color="gray" fontSize={"x-small"}>
                  Duration <Text color="black">2h 30m</Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize={"x-small"}>Friday</Text>
                <Text fontSize={"lg"} color="black" fontWeight={"600"}>
                  07:40 <Text as="span" color={"gray"}>AM</Text>
                </Text>
                <Text fontSize={"x-small"}>DXB</Text>
              </Box>
            </Box>

            <Box display={"flex"} gap="20px" mt="20px"> 
              <Text fontSize={"x-small"} border={"0.5px solid gray"} p="5px 5px" borderRadius={"10px"}>Flight details</Text>
              <Text fontSize={"x-small"} border={"0.5px solid gray"} p="5px 5px" borderRadius={"10px"}>Fare info</Text>
              <Text fontSize={"x-small"} border={"0.5px solid gray"} p="5px 5px" borderRadius={"10px"}>Refund</Text>
            </Box>
          </Box>
          <Box borderLeft={"2px solid #f2f2f2"}></Box>

          <Box display={"flex"} gap="10px">
          <Box>
            <Text fontSize={"small"} color="gray">Start from</Text>
            <Text fontSize={"lg"} fontWeight={"600"}>$2,000.00 <Text as="span" color={"gray"}>/pax</Text></Text>
            <Button colorScheme={"orange"} mt="10px">View details</Button>
          </Box>
          <Box>
          <Text fontSize={"x-small"} border={"0.5px solid gray"} p="5px 5px" borderRadius={"10px"}>Scan me</Text>
          <Image width={"80px"} height={"80px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"/>

          </Box>

          </Box>
        </Box>
  )
}

export default SearchResult
